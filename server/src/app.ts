import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import { json, raw } from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import { userRouter } from './routes/user/user-router';
const path = require('path');
import { errorHandler } from './middlewares';
import { NotFoundError } from './errors';
import { blogRouter } from './routes/blog/blog-router';
import { authRouter } from './routes/auth/auth-router';
import { destinationRouter } from './routes/destination/destination-route';
import { webhookCheckout } from './controllers/booking';
import { bookingRouter } from './routes/booking/booking-route';
import { tourRouter } from './routes/tour/tour-route';
import { reviewRouter } from './routes/review/review-route';
import { emailPromotionRouter } from './routes/emailPromotion/emailPromotion-route';
import { promotionRouter } from './routes/promotion/promotion-route';
import { surveyRouter } from './routes/survey/survey-route';
const app = express();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};
app.use(cors());
app.set('trust proxy', 1);
app.use(cookieParser());
app.use(bodyParser({ limit: '50mb' }));
app.post(
  '/webhook-checkout',
  raw({ type: 'application/json' }),
  webhookCheckout
);
app.use(cookieParser());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const baseURL = '/api/v1';

app.use('/uploads', express.static('uploads'));

app.use(baseURL, authRouter);
app.use(baseURL, userRouter);
app.use(`${baseURL}/surveys`, surveyRouter);

app.use(`${baseURL}/email-promotions`, emailPromotionRouter);
app.use(`${baseURL}/booking`, bookingRouter);
app.use(baseURL, blogRouter);

app.use(`${baseURL}/destinations`, destinationRouter);
app.use(`${baseURL}/tours`, tourRouter);
app.use(`${baseURL}/reviews`, reviewRouter);
app.use(`${baseURL}/promotions`, promotionRouter);

if (process.env.NODE_ENV === 'development') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
app.all('*', async () => {
  throw new NotFoundError();
});

//global error
app.use(errorHandler);

export { app };
