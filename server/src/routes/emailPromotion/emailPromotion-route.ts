import express, { NextFunction } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request';
import { protectRoute, restrictTo } from '../../middlewares';

import {
  getAllEmailPromotion,
  updateOneEmailPromotion,
  createOneEmailPromotion,
} from '../../controllers/emailPromotion';

const router = express.Router();

// @Route GET /api/v1/email-promotion/
// @desc get all email promotion
// @access Public
router.get('/', getAllEmailPromotion);

// @Route POST /api/v1/email-promotion/
// @desc create one email promotion
// @access Public
router.post(
  '/',
  [body('email').notEmpty().trim().withMessage('Email must be defined!')],
  validateRequest,
  createOneEmailPromotion
);

// @Route GET /api/v1/email-promotion/
// @desc update one email promotion
// @access Public
router.patch('/:id', updateOneEmailPromotion);

export { router as emailPromotionRouter };
