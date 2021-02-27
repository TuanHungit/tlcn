import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { BadRequestError } from './../errors/bad-request-error';
import { User } from '../models/user';
import { Profile } from '../models/profile';
import { Email } from '../services/email';
import { Password } from '../services/password';
import { body } from 'express-validator';

declare global {
  namespace Express {
    interface Response {
      cookie: any;
    }
    interface Request {
      user: any;
      cookies: any;
    }
  }
}

const client = new OAuth2Client(
  '75939233417-t7f3tfifirqoprmu2b270ul95hplptqs.apps.googleusercontent.com'
);
const signToken = (user: any) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email
    },
    process.env.JWT_KEY!,
    {
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  );
};

const createSendToken = (user: any, req: Request, res: Response) => {
  const token = signToken(user);
  const expirationDate =
    Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN as any) * 60 * 60 * 1000;
  res.cookie('jwt', token, {
    expires: new Date(expirationDate),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });

  res.status(201).json({
    token,
    expirationDate,
    data: {
      user
    }
  });
};

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new BadRequestError('Email is use!');
  }
  const user = User.build({ name, email, password }) as any;

  await Profile.create<any>({ user: user.id });
  const url = `http://localhost:3000/api/v1/users/signup/${user.id}`;
  //await new Email(user, url).sendAuthencatedEmail();
  await user.save();
  createSendToken(user, req, res);
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email }).select('+password');
  if (!existingUser) {
    throw new BadRequestError('Invalid credentials');
  }
  const passwordMatch = await Password.compare(existingUser.password, password);
  if (!passwordMatch) {
    throw new BadRequestError('Invalid credentials');
  }

  createSendToken(existingUser, req, res);
};

export const logout = (req: Request, res: Response) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({});
};

export const signinWithGoogle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        '75939233417-t7f3tfifirqoprmu2b270ul95hplptqs.apps.googleusercontent.com'
    })
    .then(response => {
      const {
        email_verified,
        email,
        name,
        picture
      } = response.getPayload() as any;
      if (email_verified) {
        const user = {
          photo: picture,
          name,
          email: email
        };
        createSendToken(user, req, res);
      }
    })
    .catch(err => {
      res.status(401).send('');
    });
};
