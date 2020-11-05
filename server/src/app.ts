import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import { currentUserRouter } from './routes/user/current-user';
import { signinRouter } from './routes/auth/signin';
import { signoutRouter } from './routes/auth/signout';
import { signupRouter } from './routes/auth/signup';

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
app.set('trust proxy', 1);
app.use(json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(getAllTours);
app.use(createOneTourRoute);
app.use(removeOneTourRoute);
app.use(updateOneTourRoute);
app.use(blogRouter);
app.use(authRouter);
app.all('*', async () => {
  throw new NotFoundError();
});

//global error
app.use(errorHandler);

export { app };
