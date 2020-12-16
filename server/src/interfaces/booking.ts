import mongoose from 'mongoose';

export interface IBookingDoc extends mongoose.Document {
  tour: mongoose.Schema.Types.ObjectId;
  user: any;
  priceAdults: number;
  priceChildren: number;
  priceBaby: number;
  numOfPersonAdults: number;
  numOfPersonChildren: number;
  numOfPersonBaby: number;
  discount: number;
  paymentMethod: string;
  createdAt: Date;
  startDate: Date;
  total: number;
  finalTotal: number;
}
