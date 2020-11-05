import express, { Request, Response, NextFunction } from 'express';
import { User } from '../../models/user';
import { updateOne } from '../../services/handlerFactory';

const router = express.Router();
router.post(
  '/api/v1/users/signup/:id',
  //   (req: Request, res: Response, next: NextFunction) => {
  //     req.body = {
  //       ...req.body,
  //       active: true,
  //     };

  //     next();
  //   },
  updateOne(User)
);
export { router as authEmailRoute };
