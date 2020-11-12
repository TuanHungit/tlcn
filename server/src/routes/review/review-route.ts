import express from 'express';
import {
  createOneReview,
  getAllReview,
  updateOneReview,
  deleteOneReview,
  setTourUserId,
} from '../../controllers/review';
const router = express.Router();

// @Route GET /api/v1/reviews
// @desc get all review
// @access Public

router.get('/reviews', getAllReview);

// @Route POST /api/v1/reviews
// @desc create one review
// @access Private

router.post('/tours/:tourId/reviews', setTourUserId, createOneReview);

// @Route PUT /api/v1/reviews/:id
// @desc update one review
// @access Private

router.put('/tours/:tourId/reviews/:id', updateOneReview);

// @Route DELETE /api/v1/reviews/:id
// @desc delete a review
// @access Private

router.delete('/tours/:tourId/reviews/:id', deleteOneReview);

export { router as reviewRouter };
