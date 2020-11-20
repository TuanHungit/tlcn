import mongoose from 'mongoose';

export interface IReviewAttr {
  review: string;
  rating: number;
  createdAt: Date;
  tour: any;
  user: any;
}

export interface IReviewDoc extends mongoose.Document {
  review: string;
  rating: number;
  createdAt: Date;
  tour: any;
  user: any;
}
