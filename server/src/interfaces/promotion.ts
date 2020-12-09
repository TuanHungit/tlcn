import mongoose from 'mongoose';

export interface IPromotionDoc extends mongoose.Document {
  title: string;
  code: string;
  discount: number;
  imageCovert: string;
  description: string;
  startDate: Date;
  endDate: Date;
  slug: string;
}
