import mongoose from 'mongoose';

export interface IProfileAttr {
  dateOfBirth: Date;
  country: String;
  street: String;
  city: String;
  phoneNumber: String;
  facebookUrl: String;
  twitterUrl: String;
  googleUrl: String;
  user: mongoose.Schema.Types.ObjectId;
}

export interface IProfileDoc extends mongoose.Document {
  dateOfdateOfBirthbirth: Date;
  country: String;
  street: String;
  city: String;
  phoneNumber: String;
  facebookUrl: String;
  twitterUrl: String;
  googleUrl: String;
  user: mongoose.Schema.Types.ObjectId;
}
