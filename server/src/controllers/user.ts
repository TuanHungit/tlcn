import { User } from '../models/user';
import { Request, Response, NextFunction } from 'express';
import {
  createOne,
  getAll,
  deleteOne,
  updateOne,
  getOne,
} from '../services/handlerFactory';
export const getAllUser = getAll(User);
export const createOneUser = createOne(User);
export const deleteOneUser = deleteOne(User);
export const updateOneUser = updateOne(User);
export const getOneUser = getOne(User);
export const getMe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.params.id = req.user._id;
  console.log(req.params.id);
  next();
};

export const activeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body = { ...req.body, active: true };
  next();
};
