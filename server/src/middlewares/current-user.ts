import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors';
export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentUser = req.user;
  res.status(200).json({ currentUser });
};
