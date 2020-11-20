import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors/bad-request-error';
export const restrictTo = (...roles: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // roles ['admin', 'lead-guide']. role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new BadRequestError('You do not have permission to perform this action')
      );
    }

    next();
  };
};
