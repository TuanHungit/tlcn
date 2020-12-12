import express from 'express';
import {
  getAllUser,
  getOneUser,
  getMe,
  updateOneUser,
  deleteOneUser,
} from '../../controllers/user';
import { restrictTo, protectRoute } from '../../middlewares';
import { profileRouter } from '../profile/profile-route';
const router = express.Router();
router.use('/users/profile', protectRoute, getMe, profileRouter);
router.get('/users/me', protectRoute, getMe, getOneUser);
router.route('/users').get(protectRoute, restrictTo('admin'), getAllUser);
router
  .route('/users/:id')
  .patch(protectRoute, restrictTo('admin'), updateOneUser)
  .delete(protectRoute, restrictTo('admin'), deleteOneUser);

export { router as userRouter };
