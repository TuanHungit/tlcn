const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { Booking } from '../models/booking';
import { User } from '../models/user';
import { Tour } from '../models/tour';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from './../errors/bad-request-error';
import {
  createOne,
  updateOne,
  deleteOne,
  getAll,
  getOne,
} from '../services/handlerFactory';

export const getOneBooking = getOne(Booking);
export const updateOneBooking = updateOne(Booking);
export const deleteOneBooking = deleteOne(Booking);
export const getAllBooking = getAll(Booking);

export const createBookingCheckout = async (session: any) => {
  const tour = session.client_reference_id;
  const user = (await User.findOne({ email: session.customer_email }))!.id;
  const price = session.display_items[0].amount / 100;
  await Booking.create({ tour, user, price });
};
export const getCheckoutSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1) Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);
  // console.log(tour);
  if (!tour) {
    throw new BadRequestError('Tour not found!');
  }
  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${
    //   req.params.tourId
    // }&user=${req.user.id}&price=${tour.price}`,
    success_url: `${req.protocol}://${req.get('host')}/my-tours?alert=booking`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour!.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: [
      {
        name: `${tour.name} Tour`,
        description: tour.summary,
        images: [
          `${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`,
        ],
        amount: parseFloat(tour.price as any) * 100,
        currency: 'usd',
        quantity: 1,
      },
    ],
  });

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
};

export const webhookCheckout = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const signature = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed')
    createBookingCheckout(event.data.object);

  res.status(200).json({ received: true });
};
