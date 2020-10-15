import express, { Request, Response } from "express";
import { Tour } from "../models/tour";
const router = express.Router();

// @request GET /api/tour
// @response Status 200
router.get("/api/tour", async (req: Request, res: Response) => {
  const tours = await Tour.find({});
  res.status(200).send(tours || null);
});

export { router as showAllTours };
