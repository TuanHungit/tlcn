import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request';

import {
  getAllSurvey,
  createOneSurvey,
  deleteOneSurvey,
  getOneSurvey,
} from '../../controllers/survey';

const router = express.Router();

router
  .route('/')
  .get(getAllSurvey)
  .post(
    [
      body('email').notEmpty().isEmail().withMessage('Email phải hợp lệ!'),
      body('age').notEmpty().isNumeric().withMessage('Tuổi phải hợp lệ!'),
      body('destination')
        .notEmpty()
        .withMessage('Địa điểm du lịch phải hợp lệ!'),
      body('duration').notEmpty().withMessage('Số ngày phải hợp lệ!'),
      body('time').notEmpty().withMessage('Khoảng thời gian phải hợp lệ!'),
      body('price').notEmpty().withMessage('Khoảng giá phải hợp lệ!'),
      body('numOfLocation')
        .notEmpty()
        .withMessage('Số lượng điểm tham quan phải hợp lệ!'),
    ],
    createOneSurvey
  );
router.route('/:id').get(getOneSurvey).delete(deleteOneSurvey);
export { router as surveyRouter };
