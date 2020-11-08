import express from 'express';
import { body } from 'express-validator';
import { validateRequest, protectRoute } from '../../middlewares';
import { signin, signup, logout } from '../../controllers/auth';

const router = express.Router();

// @Route POST /api/v1/users/signin
// @desc signin
// @access Public
router.post('/api/v1/users/signin', signin);

// @Route POST /api/V1/users/signup
// @desc signup
// @access Public
router.post('/api/v1/users/signup', signup);

// @Route GET /api/users/logout
// @desc signup
// @access Public
router.get('/api/v1/users/signout', logout);
export { router as authRouter };
