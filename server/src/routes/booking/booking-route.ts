import express from 'express';
import {
  getCheckoutSession,
  getAllBooking,
  getOneBooking,
  updateOneBooking,
  deleteOneBooking,
  createBookingCheckout,
} from '../../controllers/booking';
import { protectRoute } from '../../middlewares/protect-route';
const router = express.Router();

router.use(protectRoute);

// @Route PUT /api/v1/get-session
// @desc update a destinations by id
// @access Private

router.get('/checkout-session/:tourId', getCheckoutSession);
router.route('/').get(getAllBooking).post(createBookingCheckout);

router
  .route('/bookings/:id')
  .get(getOneBooking)
  .patch(updateOneBooking)
  .delete(deleteOneBooking);

export { router as bookingRouter };
