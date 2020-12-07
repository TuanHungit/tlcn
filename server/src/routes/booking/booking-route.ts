import express from 'express';
import {
  getCheckoutSession,
  getAllBooking,
  getOneBooking,
  updateOneBooking,
  deleteOneBooking,
  createOneBooking,
  createPaymentIntent,
} from '../../controllers/booking';

import { paymentRequires } from './../../middlewares/payment-requires';
const router = express.Router();

// @Route PUT /api/v1/get-session
// @desc update a destinations by id
// @access Private

router.get('/checkout-session/:tourId', paymentRequires, getCheckoutSession);
router.post('/create-payment-intent', paymentRequires, createPaymentIntent);
router.route('/').get(getAllBooking).post(createOneBooking);

router
  .route('/bookings/:id')
  .get(getOneBooking)
  .patch(updateOneBooking)
  .delete(deleteOneBooking);

export { router as bookingRouter };
