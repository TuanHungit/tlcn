import mongoose from 'mongoose';
export interface IStartLocationDOC extends mongoose.Document {
  type: String;
  coordinates: [Number];
  address: String;
  description: String;
}
export interface ILocationsDOC extends mongoose.Document {
  type: String;
  coordinates: [Number];
  address: String;
  description: String;
  day: Number;
}
export interface ITourAttrs {
  name: String;
  price: Number;
  priceDiscount: Number;
  ratingsAverage: Number;
  ratingsQuantity: Number;
  summary: String;
  description: String;
  imageCover: String;
  images: [String];
  availableDate: [String];
  startLocation: IStartLocationDOC;
  locations: [ILocationsDOC];
  duration: Number;
  comments: [String];
}

export interface ITourDoc extends mongoose.Document {
  name: String;
  price: Number;
  priceDiscount: Number;
  duration: Number;
  ratingsAverage: Number;
  ratingsQuantity: Number;
  summary: String;
  description: String;
  imageCover: String;
  images: [String];
  availableDate: [String];
  startLocation: IStartLocationDOC;
  locations: [ILocationsDOC];
  comments: [String];
}
