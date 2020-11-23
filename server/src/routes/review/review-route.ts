import express, { NextFunction } from 'express';
import { protectRoute } from './../../middlewares/protect-route';
import {
  createOneReview,
  getAllReview,
  updateOneReview,
  deleteOneReview,
  setTourUserId,
  getOneReview,
  getReviewByTour,
} from '../../controllers/review';
const router = express.Router({ mergeParams: true });

// @Route GET /api/v1/reviews
// @desc get all review
// @access Public

router.get('/', getAllReview);

// @Route GET /api/v1/reviews:id
// @desc get one a review
// @access Public

router.get('/:id', getOneReview);

// @Route POST /api/v1/tours/:tourId/reviews
// @desc create one review
// @access Private

router.post('/', protectRoute, setTourUserId, createOneReview);

// @Route patch /api/v1/reviews/:id
// @desc update one review
// @access Private

router.patch('/:id', protectRoute, updateOneReview);

// @Route DELETE /api/v1/reviews/:id
// @desc delete a review
// @access Private

router.delete('/:id', protectRoute, deleteOneReview);

export { router as reviewRouter };
