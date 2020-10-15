import express, { Request, Response } from "express";
import { Tour } from "../models/tour";
import {
  requireAuth,
  validateRequest,
  BadRequestError,
} from "@thticket/common";
import { body } from "express-validator";

// @request PUT /api/tour
// @response status 201
const router = express.Router();
router.put(
  "/api/tour",
  requireAuth,
  [
    body("name").notEmpty().trim().withMessage("Name must be defined!"),
    body("price").isFloat().withMessage("Price must be valid!"),
    body("priceDiscount")
      .isFloat()
      .withMessage("Price discount must be valid!"),
    body("ratingAverage")
      .isFloat()
      .withMessage("Rating average must be valid!"),
    body("ratingQuantity")
      .isNumeric()
      .withMessage("Rating quantity must be valid!"),
    body("summary").trim().notEmpty().withMessage("Sumary must be defined!"),
    body("description")
      .trim()
      .notEmpty()
      .withMessage("Description must be defined!"),
    body("imageCover")
      .trim()
      .notEmpty()
      .withMessage("ImageCover must be defined!"),
    body("images").isArray().notEmpty().withMessage("Images must be defined!"),
    body("startDates")
      .isArray()
      .notEmpty()
      .withMessage("StartDates must be defined!"),
    body("startLocation")
      .notEmpty()
      .withMessage("Start location must be defined!"),
    body("locations").notEmpty().withMessage("Locations must be defined!"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const tourUpdated = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!tourUpdated) {
      throw new BadRequestError("No document found with that ID");
    }
    await tourUpdated.save();
    res.status(201).send(tourUpdated);
  }
);

export { router as updateOneTourRoute };
