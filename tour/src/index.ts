import mongoose from "mongoose";

require("dotenv").config({ path: __dirname + "/.env" });

import { app } from "./app";

const start = async () => {
  if (!process.env.MONGO_URL) {
    throw new Error("Mongo url must be defined!");
  }
  const DB = process.env.MONGO_URL.replace(
    "<password>",
    process.env.MONGO_PASSWORD!
  );
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
  app.listen(3002, () => {
    console.log("[tour-service] is running on Port 3002");
  });
};
start();
