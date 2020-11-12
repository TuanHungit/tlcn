import { Request, Response, NextFunction } from 'express';
import { Review } from '../models/review';
import {
  createOne,
  updateOne,
  deleteOne,
  getAll,
  getOne,
} from '../services/handlerFactory';

export const createOneReview = createOne(Review);
export const getOneReview = getOne(Review);
export const updateOneReview = updateOne(Review);
export const deleteOneReview = deleteOne(Review);
export const getAllReview = getAll(Review);

export const setTourUserId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.tour = req.params.tourId;
  req.body.user = req.user.id;
  next();
};
