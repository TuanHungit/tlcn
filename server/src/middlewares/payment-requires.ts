import { Request, Response, NextFunction } from 'express';
import { protectRoute } from './protect-route';

export const paymentRequires = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { age, fullname, email, phone } = req.body;
  console.log(req.body);
  if (!fullname || !email) {
    return protectRoute(req, res, next);
  }
  next();
};
