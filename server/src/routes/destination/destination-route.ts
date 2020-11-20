import express from 'express';
import { body } from 'express-validator';
import { validateRequest, protectRoute, restrictTo } from '../../middlewares';
import { tourRouter } from '../tour/tour-route';
import {
  createOneDestination,
  getOneDestination,
  updateOneDestination,
  deleteOneDestination,
  getAllDestination,
} from '../../controllers/destination';

const router = express.Router();

router.use('/:destId/tours', tourRouter);

// @Route GET /api/v1/destinations/:id
// @desc get one destinations
// @access Public
router.get('/:id', getOneDestination);

// @Route GET /api/v1/destinations
// @desc get all destinations
// @access Public
router.get('/', getAllDestination);

// @Route POST /api/v1/destinations
// @desc create a destination
// @access Private
router.post(
  '/',
  protectRoute,
  restrictTo('admin'),
  [
    body('name')
      .notEmpty()
      .trim()
      .withMessage('Destination name must be defined!'),
    body('summary').notEmpty().withMessage('Blog summary must be defined!'),
    body('destination').isArray().withMessage('Destination must be defined!'),
  ],
  validateRequest,
  createOneDestination
);

// @Route PATCH /api/v1/destinations/:id
// @desc update a destinations by id
// @access Private
router.patch('/:id', protectRoute, restrictTo('admin'), updateOneDestination);

// @Route DELETE /api/v1/destinations
// @desc delete a destinations by id
// @access Private
router.delete('/:id', protectRoute, restrictTo('admin'), deleteOneDestination);

export { router as destinationRouter };
