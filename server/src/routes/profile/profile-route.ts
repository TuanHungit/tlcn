import express from 'express';
import {
  getAllProfile,
  getOneProfile,
  updateOneProfile,
  createOneProfile,
  setUserId,
} from '../../controllers/profile';
import { protectRoute, restrictTo } from '../../middlewares';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(protectRoute, restrictTo('admin', 'user'), setUserId, getAllProfile)
  .post(protectRoute, restrictTo('admin', 'user'), setUserId, createOneProfile)
  .put(protectRoute, restrictTo('admin', 'user'), setUserId, updateOneProfile);

router
  .route('/:id')
  .get(protectRoute, restrictTo('admin', 'user'), getOneProfile);

export { router as profileRouter };
