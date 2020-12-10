import mongoose from 'mongoose';

export interface ISurverDoc extends mongoose.Document {
  email: string;
  createdAt: Date;
  age: number;
  destination: string;
  duration: number;
  time: Array<String>;
  price: number;
  numOfLocation: number;
  feedback: string;
}

export interface ISurverAttr {
  email: string;
  createdAt: Date;
  age: number;
  destination: string;
  duration: number;
  time: Array<String>;
  price: number;
  numOfLocation: number;
  feedback: string;
}
