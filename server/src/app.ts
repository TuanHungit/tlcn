import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import { userRouter } from './routes/user/user-router';

import { getAllTours } from './routes/tour/index';
import { createOneTourRoute } from './routes/tour/new';
import { removeOneTourRoute } from './routes/tour/remove';
import { updateOneTourRoute } from './routes/tour/update';
import { authEmailRoute } from './routes/auth/auth-email';
import { errorHandler } from './middlewares';
import { NotFoundError } from './errors';
import { blogRouter } from './routes/blog/blog-router';
import { authRouter } from './routes/auth/auth-router';
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
  origin: 'http://localhost:3000',
  preflightContinue: false,
};
app.use(cors(options));
app.set('trust proxy', 1);

app.use(json());
app.use(cookieParser());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(getAllTours);
app.use(createOneTourRoute);
app.use(removeOneTourRoute);
app.use(updateOneTourRoute);
app.use(blogRouter);
app.use(authRouter);
app.use(userRouter);
app.all('*', async () => {
  throw new NotFoundError();
});

//global error
app.use(errorHandler);

export { app };
