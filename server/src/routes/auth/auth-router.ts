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
router.post('/users/signin', signin);

// @Route POST /api/v1/users/signin-google
// @desc signin
// @access Public
router.post('/users/signin-google', signinWithGoogle);

// @Route POST /api/V1/users/signup
// @desc signup
// @access Public
router.post('/users/signup', signup);

// @Route GET /api/users/logout
// @desc signup
// @access Public
router.get('/users/signout', logout);
export { router as authRouter };
