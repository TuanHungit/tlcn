import mongoose from 'mongoose';

export interface IReviewAttr {
  review: String;
  rating: Number;
  createdAt: Date;
  tour: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
}

export interface IReviewDoc extends mongoose.Document {
  review: String;
  rating: Number;
  createdAt: Date;
  tour: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
}
