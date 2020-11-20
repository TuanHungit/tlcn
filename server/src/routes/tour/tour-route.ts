import express, { NextFunction } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request';
import { protectRoute, restrictTo } from '../../middlewares';
import { reviewRouter } from '../review/review-route';
import {
  getAllTour,
  updateOneTour,
  createOneTour,
  deleteOneTour,
  getOneTour,
  getTourByDestination,
  setDestinationId,
  getTourForView,
} from '../../controllers/tour';

const router = express.Router({ mergeParams: true });

router.use('/:tourId/reviews', reviewRouter);
// @Route GET /api/v1/tours
// @desc get all tours
// @access PUBLIC
router.get('/', getAllTour);

// @Route GET /api/v1/:desId/tours
// @desc get all tours by destination
// @access PUBLIC
router.get('/tours-dest', getTourByDestination);

// @Route GET /api/v1/tours/:id
// @desc get a tour
// @access PUBLIC
router.get('/:id', getTourForView);

// @Route POST /api/v1/tours
// @desc create a tour
// @access PRIVATE

router.post(
  '/',
  protectRoute,
  restrictTo('admin'),
  [
    body('name').notEmpty().trim().withMessage('Name must be defined!'),
    body('price').isFloat().withMessage('Price must be valid!'),
    body('priceDiscount')
      .isFloat()
      .withMessage('Price discount must be valid!'),
    body('ratingsAverage')
      .isFloat()
      .withMessage('Rating average must be valid!'),
    body('ratingsQuantity')
      .isNumeric()
      .withMessage('Rating quantity must be valid!'),
    body('summary').trim().notEmpty().withMessage('Sumary must be defined!'),
    body('description')
      .trim()
      .notEmpty()
      .withMessage('Description must be defined!'),
    body('imageCover')
      .trim()
      .notEmpty()
      .withMessage('ImageCover must be defined!'),
    body('images').isArray().notEmpty().withMessage('Images must be defined!'),
    body('availableDate')
      .isArray()
      .notEmpty()
      .withMessage('StartDates must be defined!'),
    body('startLocation')
      .notEmpty()
      .withMessage('Start location must be defined!'),
    body('locations').notEmpty().withMessage('Locations must be defined!'),
  ],
  validateRequest,
  setDestinationId,
  createOneTour
);

// @Route PATCH /api/v1/tours/:id
// @desc update a tour
// @access PRIVATE
router.patch('/:id', protectRoute, restrictTo('admin'), updateOneTour);

// @Route POST /api/v1/tours/:id
// @desc delete a tour
// @access PRIVATE
router.delete('/:id', protectRoute, restrictTo('admin'), deleteOneTour);
export { router as tourRouter };
