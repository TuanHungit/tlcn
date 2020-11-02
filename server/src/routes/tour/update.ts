import express, { Request, Response } from 'express';
import { updateOne } from './../../services/handlerFactory';
import { Tour } from '../../models/tour';

import {
  requireAuth,
  validateRequest,
  BadRequestError,
} from '@thticket/common';
import { body } from 'express-validator';

// @request PUT /api/tour
// @response status 201
const router = express.Router();
router.put('/api/v1/tours/:id', updateOne(Tour));

export { router as updateOneTourRoute };
