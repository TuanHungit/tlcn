import express from 'express';
const cors = require('cors');
import { errorHandler, NotFoundError } from '@thticket/common';
import { json } from 'body-parser';
import { showAllTours } from './routes/index';
import { createOneTourRoute } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range');
  next();
});

app.use(showAllTours);
app.use(createOneTourRoute);
app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);
export { app };
