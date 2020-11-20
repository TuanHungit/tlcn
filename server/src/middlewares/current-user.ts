import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors';
export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentUser = req.user;
  req.params.id = req.user.id;
  res.status(200).json({ currentUser });
};
