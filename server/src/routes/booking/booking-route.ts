import express from 'express';
import {
  getCheckoutSession,
  getAllBooking,
  getOneBooking,
  updateOneBooking,
  deleteOneBooking,
  createBookingCheckout,
  createPaymentIntent,
} from '../../controllers/booking';
import { protectRoute } from '../../middlewares/protect-route';
const router = express.Router();

// @Route PUT /api/v1/get-session
// @desc update a destinations by id
// @access Private

router.get('/checkout-session/:tourId', protectRoute, getCheckoutSession);
router.post('/create-payment-intent', protectRoute, createPaymentIntent);
router.route('/').get(getAllBooking).post(createBookingCheckout);

router
  .route('/bookings/:id')
  .get(getOneBooking)
  .patch(updateOneBooking)
  .delete(deleteOneBooking);

export { router as bookingRouter };
