import { Request, Response, NextFunction } from 'express';
import { Review } from '../models/review';
import { Tour } from '../models/tour';
import { BadRequestError } from '../errors/bad-request-error';
import { Schema } from 'mongoose';
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

export const getReviewByTour = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tourId = req.params.tourId;
  console.log(tourId);
  const tour = await Tour.findById(tourId);
  if (!tour) {
    throw new BadRequestError('Tour document not found with that ID!');
  }
  const reviews = await Review.find({ tour: tourId });
  res.status(200).send(reviews);
};
