import mongoose from 'mongoose';

export interface IReviewAttr {
  review: string;
  rating: number;
  createdAt: Date;
  tour: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
}

export interface IReviewDoc extends mongoose.Document {
  review: string;
  rating: number;
  createdAt: Date;
  tour: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
}
