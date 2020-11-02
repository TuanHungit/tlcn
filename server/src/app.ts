import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import { currentUserRouter } from './routes/auth/current-user';
import { signinRouter } from './routes/auth/signin';
import { signoutRouter } from './routes/auth/signout';
import { signupRouter } from './routes/auth/signup';

import { getAllTours } from './routes/tour/index';
import { createOneTourRoute } from './routes/tour/new';
import { removeOneTourRoute } from './routes/tour/remove';
import { updateOneTourRoute } from './routes/tour/update';
import { errorHandler, NotFoundError } from '@thticket/common';

const app = express();
app.set('trust proxy', 1);
app.use(json());
app.use(
  cookieSession({
    signed: false, // disabled encryte
    secure: false, // only https connection
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(getAllTours);
app.use(createOneTourRoute);
app.use(removeOneTourRoute);
app.use(updateOneTourRoute);
app.all('*', async () => {
  throw new NotFoundError();
});

//global error
app.use(errorHandler);

export { app };
