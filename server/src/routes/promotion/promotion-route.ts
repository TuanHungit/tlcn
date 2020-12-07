import express, { NextFunction } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request';
import { protectRoute, restrictTo } from '../../middlewares';

import {
  getAllPromotion,
  createOnePromotion,
  updateOnePromotion,
  deleteOnePromotion,
  checkCodeValids,
} from '../../controllers/promotion';

const router = express.Router();

// @Route GET /api/v1/email-promotion/
// @desc get all email promotion
// @access Public
router.get('/', getAllPromotion);

// @Route POST /api/v1/email-promotion/
// @desc create one email promotion
// @access Public
router.post(
  '/',

  protectRoute,
  restrictTo('admin'),
  createOnePromotion
);

// @Route GET /api/v1/email-promotion/
// @desc update one email promotion
// @access Public
router.patch('/:id', protectRoute, restrictTo('admin'), updateOnePromotion);

// @Route GET /api/v1/email-promotion/
// @desc update one email promotion
// @access Public
router.delete('/:id', protectRoute, restrictTo('admin'), deleteOnePromotion);

export { router as promotionRouter };
