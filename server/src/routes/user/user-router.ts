import express, { Request, Response } from 'express';
import { getMe } from '../../controllers/user';
import { currentUser, protectRoute } from '../../middlewares';

const router = express.Router();

router.get('/api/v1/users/me', protectRoute, currentUser, getMe);

export { router as userRouter };
