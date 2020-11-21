import mongoose from 'mongoose';
export interface IStartLocationDOC extends mongoose.Document {
  type: string;
  coordinates: [number];
  address: string;
  description: string;
}
export interface ILocationsDOC extends mongoose.Document {
  title: string;
  coordinates: [number];
  address: string;
  description: string;
  day: number;
}
export interface ITourAttrs {
  name: string;
  slug: string;
  price: number;
  priceDiscount: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  summary: string;
  description: string;
  imageCover: string;
  images: [string];
  availableDate: [string];
  startLocation: IStartLocationDOC;
  locations: [ILocationsDOC];
  duration: number;
  comments: [string];
}

export interface ITourDoc extends mongoose.Document {
  name: string;
  price: number;
  slug: string;
  country: string;
  priceDiscount: number;
  duration: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  summary: string;
  description: string;
  imageCover: string;
  images: [string];
  availableDate: [string];
  startLocation: IStartLocationDOC;
  locations: [ILocationsDOC];
  comments: [string];
}
