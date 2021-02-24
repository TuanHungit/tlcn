const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { Booking } from '../models/booking';
import { User } from '../models/user';
import { Tour } from '../models/tour';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from './../errors/bad-request-error';
import { Email } from '../services/email';
import {
  createOne,
  updateOne,
  deleteOne,
  getAll,
  getOne,
} from '../services/handlerFactory';
// export const createOneBooking = createOne(Booking);
export const getOneBooking = getOne(Booking);
export const updateOneBooking = updateOne(Booking);
export const deleteOneBooking = deleteOne(Booking);
export const getAllBooking = getAll(Booking);

// export const createBookingCheckout = async (session: any) => {
//   const tour = session.client_reference_id;
//   const user = (await User.findOne({ email: session.customer_email }))!.id;
//   const price = session.display_items[0].amount / 100;
//   await Booking.create({ tour, user, price });
// };

export const createOneBooking = async (req: Request, res: Response) => {
  const doc = await Booking.create(req.body);
  new Email().sendBooking(req.body);
  res.status(201).json(doc);
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
    success_url: `${req.protocol}://${req.get('host')}/`,
    cancel_url: `${req.protocol}://${req.get('host')}/`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: [
      {
        name: `${tour.name} Tour`,
        description: tour.summary,
        images: [`https://www.natours.dev/img/tours/tour-1-1.jpg`],
        amount: tour.priceAdults,
        currency: 'VND',
        quantity: 1,
      },
    ],
  });

  // 3) Create session as response
  res.json({ id: session.id });
};

export const webhookCheckout = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const signature = req.headers['stripe-signature'];

  // let event;
  // try {
  //   event = stripe.webhooks.constructEvent(
  //     req.body,
  //     signature,
  //     process.env.STRIPE_WEBHOOK_SECRET
  //   );
  // } catch (err) {
  //   return res.status(400).send(`Webhook error: ${err.message}`);
  // }

  // if (event.type === 'checkout.session.completed')
  //   createBookingCheckout(event.data.object);

  res.status(200).json(); //{ received: true }
};

export const createPaymentIntent = async (req: Request, res: Response) => {
  const body = req.body;

  const options = {
    amount: body.amount,
    currency: body.currency,
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create(options);
    res.json(paymentIntent);
  } catch (err) {
    res.json(err);
  }
};

export const getBookingFromUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  console.log(email);
  const doc = await Booking.find({ 'user.email': email });
  res.status(200).send(doc);
};
