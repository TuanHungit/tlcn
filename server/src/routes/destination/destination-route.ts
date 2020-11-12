import express from 'express';
import { body } from 'express-validator';
import { validateRequest, protectRoute } from '../../middlewares';

import {
  createOneDestination,
  getOneDestination,
  updateOneDestination,
  deleteOneDestination,
  getAllDestination,
} from '../../controllers/destination';

const router = express.Router();

// @Route POST /api/v1/destinations
// @desc create a destination
// @access Private
router.post(
  '/destinations',
  protectRoute,
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

// @Route GET /api/v1/destinations/:id
// @desc get one destinations
// @access Public
router.get('/destinations/:id', getOneDestination);

// @Route GET /api/v1/destinations
// @desc get all destinations
// @access Public
router.get('/destinations', getAllDestination);

// @Route PUT /api/v1/destinations/:id
// @desc update a destinations by id
// @access Private
router.put('/destinations/:id', protectRoute, updateOneDestination);

// @Route DELETE /api/v1/destinations
// @desc delete a destinations by id
// @access Private
router.delete('/destinations/:id', protectRoute, deleteOneDestination);

export { router as destinationRouter };
