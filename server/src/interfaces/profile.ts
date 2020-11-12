import mongoose from 'mongoose';

export interface IProfileAttr {
  dateOfBirth: Date;
  country: string;
  street: string;
  city: string;
  phoneNumber: string;
  facebookUrl: string;
  twitterUrl: string;
  googleUrl: string;
  user: mongoose.Schema.Types.ObjectId;
}

export interface IProfileDoc extends mongoose.Document {
  dateOfdateOfBirthbirth: Date;
  country: string;
  street: string;
  city: string;
  phoneNumber: string;
  facebookUrl: string;
  twitterUrl: string;
  googleUrl: string;
  user: mongoose.Schema.Types.ObjectId;
}
