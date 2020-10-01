import express from 'express';
import cookieSession from 'cookie-session';
import { json } from 'body-parser';
import { errorHandler, NotFoundError } from '@thticket/common';

import { signupRouter } from './routes/signup';

const app = express();
//config
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false, // disabled encryte
    secure: process.env.NODE_ENV !== 'test', // only https connection
  })
);

//routing
app.use(signupRouter);
app.all('*', () => {
  throw new NotFoundError();
});

//global error handler
app.use(errorHandler);

export { app };
