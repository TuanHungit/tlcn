import express from 'express';
import { body } from 'express-validator';
import { validateRequest, protectRoute } from '../../middlewares';
import { signin, signup } from '../../controllers/auth';

const router = express.Router();

// @Route POST /api/v1/blogs
// @desc create a blog
// @access Private
router.post('/api/v1/users/signin', signin);
router.post('/api/v1/users/signup', signup);
export { router as authRouter };
