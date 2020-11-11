import mongoose from 'mongoose';

export interface IProfileAttr {
  dateOfbirth: Date;
  country: String;
  street: String;
  city: String;
  phoneNumber: String;
  facebookUrl: String;
  twitterUrl: String;
  googleUrl: String;
  user: mongoose.Schema.Types.ObjectId;
}

export interface IProfileDoc {
  dateOfbirth: Date;
  country: String;
  street: String;
  city: String;
  phoneNumber: String;
  facebookUrl: String;
  twitterUrl: String;
  googleUrl: String;
  user: mongoose.Schema.Types.ObjectId;
}
