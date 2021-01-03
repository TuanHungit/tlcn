import express from 'express';
import { body } from 'express-validator';
import { validateRequest, protectRoute } from '../../middlewares';
import {
  signin,
  signup,
  logout,
  signinWithGoogle,
} from '../../controllers/auth';

const router = express.Router();

// @Route POST /api/v1/users/signin
// @desc signin
// @access Public
router.post(
  '/users/signin',
  body('email').isEmail().withMessage('Email must be valid!'),
  body('password')
    .isLength({ min: 5, max: 16 })
    .withMessage('Password length must be between 5 and 16!'),
  signin
);

// @Route POST /api/v1/users/signin-google
// @desc signin
// @access Public
router.post('/users/signin-google', signinWithGoogle);

// @Route POST /api/V1/users/signup
// @desc signup
// @access Public
router.post(
  '/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('name').notEmpty().trim().withMessage('Name must be defined!'),
    body('password')
      .isLength({ min: 5, max: 16 })
      .withMessage('Password length must be between 5 and 16!'),
  ],
  validateRequest,
  signup
);

// @Route GET /api/users/logout
// @desc signup
// @access Public
router.get('/users/signout', logout);
export { router as authRouter };
