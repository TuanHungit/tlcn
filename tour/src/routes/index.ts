import express, { Request, Response } from 'express';
import { Tour } from '../models/tour';
const router = express.Router();

// @request GET /api/tour
// @response Status 200
router.get('/api/tours', async (req: Request, res: Response) => {
  const tours = await Tour.find({});
  res.setHeader('Content-Range', tours.length);
  res.status(200).send(tours);
});

export { router as showAllTours };
