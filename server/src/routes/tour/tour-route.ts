import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request';
import { protectRoute } from '../../middlewares/protect-route';
import { reviewRouter } from '../review/review-route';
import {
  getAllTour,
  updateOneTour,
  createOneTour,
  deleteOneTour,
  getOneTour,
  getTourByDestination,
} from '../../controllers/tour';

const router = express.Router();

// @Route GET /api/v1/tours
// @desc get all tours
// @access PUBLIC
router.get('/tours', getAllTour);

// @Route GET /api/v1/tours/:desId
// @desc get all tours by destination
// @access PUBLIC
router.get('/tours/:desId', getTourByDestination);
// @Route GET /api/v1/tours/:id

// @desc get a tour
// @access PUBLIC
router.get('/tours/:id', getOneTour);

// @Route POST /api/v1/tours
// @desc create a tour
// @access PRIVATE
router.post(
  '/tours',
  protectRoute,
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
  createOneTour
);

// @Route PUT /api/v1/tours/:id
// @desc update a tour
// @access PRIVATE
router.put('/tours/:id', protectRoute, updateOneTour);

// @Route POST /api/v1/tours/:id
// @desc delete a tour
// @access PRIVATE
router.delete('/tours/:id', protectRoute, deleteOneTour);

export { router as tourRouter };
