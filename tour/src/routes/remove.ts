import express, { Request, Response } from "express";
import { validateRequest, BadRequestError } from "@thticket/common";

import { Tour } from "../models/tour";

const router = express.Router();

// @Request DELETE /api/tour
// @response status 201

router.delete("/api/tour", async (req: Request, res: Response) => {
  const tourDeleted = await Tour.findByIdAndDelete(req.params.id);
  if (!tourDeleted) {
    throw new BadRequestError("Document has not found!");
  }
  res.status(201);
});

export { router as removeOneTourRoute };
