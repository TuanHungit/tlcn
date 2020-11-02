import express, { Request, Response } from 'express';
import { Tour } from '../../models/tour';
import { createOne, getAll } from './../../services/handlerFactory';
const router = express.Router();

// @request GET /api/tour
// @response Status 200
router.get('/api/v1/tours', getAll(Tour));

export { router as getAllTours };
