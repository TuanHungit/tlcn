import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { BadRequestError, NotAuthorizedError } from '../errors';
import { User } from '../models/user';
export const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: any;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    throw new NotAuthorizedError();
  }
  // 2) Verification token
  const decoded = (await promisify(jwt.verify)(
    token,
    process.env.JWT_KEY!
  )) as any;
  console.log(decoded);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    throw new BadRequestError(
      'The user belonging to this token does no longer exist.'
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
};
