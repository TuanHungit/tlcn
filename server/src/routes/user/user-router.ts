import express, { Request, Response } from 'express';
import {
  getAllUser,
  getOneUser,
  getMe,
  updateOneUser,
  deleteOneUser,
} from '../../controllers/user';
import { restrictTo, protectRoute } from '../../middlewares';

const router = express.Router();
router.use(protectRoute);
router.get('/users/me', getMe, getOneUser);

router.use(restrictTo('admin'));
router.route('/users').get(getAllUser);
router.route('/users/:id').patch(updateOneUser).delete(deleteOneUser);

export { router as userRouter };
