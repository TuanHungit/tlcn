import express, { Request, Response } from 'express';
import { updateOne } from './../../services/handlerFactory';
import { User } from '../../models/user';

// @request PUT /api/tour
// @response status 201
const router = express.Router();
router.put('/api/v1/users/:id', updateOne(User));

export { router as updateOneTourRoute };
