import express, { NextFunction } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request';
import { protectRoute, restrictTo } from '../../middlewares';

import {
  getAllPromotion,
  createOnePromotion,
  updateOnePromotion,
  deleteOnePromotion,
  getOnePromotion,
  checkCodeValids,
} from '../../controllers/promotion';

const router = express.Router();

// @Route GET /api/v1/promotion/
// @desc get all  promotion
// @access Public
router.get('/', getAllPromotion);

// @Route GET /api/v1/promotions/:id
// @desc get one promotion
// @access Public

router.get('/:id', getOnePromotion);

// @Route GET /api/v1/promotions/:id
// @desc get one promotion
// @access Public

router.post(
  '/check/code',
  [body('code').notEmpty().withMessage('Code must be defined!')],
  validateRequest,
  checkCodeValids
);

// @Route POST /api/v1/promotions/
// @desc create one promotion
// @access Private

router.post(
  '/',
  [
    body('startDate').notEmpty().withMessage('Start date must be defined!'),
    body('endDate').notEmpty().withMessage('End date must be defined!'),
    body('title').trim().notEmpty().withMessage('Title date must be defined!'),
    body('code').trim().notEmpty().withMessage('Code must be defined!'),
    body('discount')
      .isNumeric()
      .notEmpty()
      .withMessage('Discount must be valid!'),
    body('description')
      .trim()
      .notEmpty()
      .withMessage('Descrption must be defined!'),
  ],
  validateRequest,
  protectRoute,
  restrictTo('admin'),
  createOnePromotion
);

// @Route GET /api/v1/email-promotion/
// @desc update one email promotion
// @access Private
router.patch('/:id', protectRoute, restrictTo('admin'), updateOnePromotion);

// @Route GET /api/v1/email-promotion/
// @desc update one email promotion
// @access Private
router.delete('/:id', protectRoute, restrictTo('admin'), deleteOnePromotion);

export { router as promotionRouter };
