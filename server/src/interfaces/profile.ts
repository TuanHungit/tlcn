import mongoose from 'mongoose';

export interface IProfileAttr {
  photo: string;
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
  photo: string;
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
