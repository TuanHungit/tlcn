import express, { Request, Response } from 'express';
import { validateRequest, BadRequestError } from '@thticket/common';
import { deleteOne } from './../../services/handlerFactory';
import { Tour } from '../../models/tour';

const router = express.Router();

// @Request DELETE /api/tour
// @response status 201

router.delete('/api/v1/tours/:id', deleteOne(Tour));

export { router as removeOneTourRoute };
