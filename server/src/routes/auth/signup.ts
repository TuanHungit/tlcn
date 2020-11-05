import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { User } from '../../models/user';
import { BadRequestError, validateRequest } from '@thticket/common';

import { Email } from './../../services/email';
const router = express.Router();
router.post(
  '/api/v1/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
    body('name').not().isEmpty().withMessage('Name must be defined!'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email is use!');
    }
    const user = User.build({ name, email, password });

    const url = `http://localhost:3000/api/v1/users/signup/${user.id}`;
    await new Email(user, url).sendAuthencatedEmail();
    await user.save();

    //create jwt
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name,
      },
      process.env.JWT_KEY!,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
    //store jwt in cookie session

    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() +
          (process.env.JWT_COOKIE_EXPIRES_IN as any) * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    });
    res.status(201).send(user);
  }
);

export { router as signupRouter };
