import mongoose from 'mongoose';

const result = require('dotenv').config({ path: __dirname + '/.env' });

console.log(result.error);
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT must be defined!');
  }
  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL must be defined!');
  }
  const DB = process.env.MONGO_URL.replace(
    '<password>',
    process.env.MONGO_PASSWORD!
  );
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error(err);
  }
  app.listen(3001, () => {
    console.log('[auth-service]: listening on port 3001!');
  });
};
start();
