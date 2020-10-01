import mongoose from 'mongoose';

require('dotenv').config({ path: './src/.env' });

import { app } from './app';

const start = async () => {
  console.log(process.env);
  if (!process.env.JWT_KEY) {
    throw new Error('JWT must be defined!');
  }
  if (!process.env.DATABASE) {
    throw new Error('MONGO_URL must be defined!');
  }
  const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!
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
