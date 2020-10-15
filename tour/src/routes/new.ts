import express, { Request, Response } from "express";
import { Tour } from "../models/tour";
import { requireAuth, validateRequest } from "@thticket/common";
import { body } from "express-validator";

// @request POST /api/tour
// @response status 201
const router = express.Router();
router.post(
  "/api/tour",
  [
    body("name").notEmpty().trim().withMessage("Name must be defined!"),
    body("price").isFloat().withMessage("Price must be valid!"),
    body("priceDiscount")
      .isFloat()
      .withMessage("Price discount must be valid!"),
    body("ratingsAverage")
      .isFloat()
      .withMessage("Rating average must be valid!"),
    body("ratingsQuantity")
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
    body("availableDate")
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
    const tourCreated = Tour.build(req.body);
    await tourCreated.save();
    res.status(201).send(tourCreated);
  }
);

export { router as createOneTourRoute };
