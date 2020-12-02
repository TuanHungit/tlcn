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
import { userRouter } from '../routes/user/user-router';

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
  const slug = req.params.slug;
  const tour = await Tour.findOne({ slug });
  if (!tour) {
    throw new BadRequestError('Tour document not found with that slug!');
  }
  const reviews = await Review.find({ tour: tour.id });
  res.status(200).send(reviews);
};

export const getReviewByTourAndUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const slug = req.params.slug;
  const userId = req.user.id;

  const tour = await Tour.findOne({ slug });

  if (!tour) {
    throw new BadRequestError('No document found with that slug');
  }
  const review = await Review.findOne({ tour: tour.id, user: { _id: userId } });
  console.log(review);
  res.status(200).send(review);
};
