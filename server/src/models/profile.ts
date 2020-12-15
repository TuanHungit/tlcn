import mongoose from 'mongoose';
import { Request } from 'express';

import { IProfileAttr, IProfileDoc } from '../interfaces/profile';

interface IProfileModel extends mongoose.Model<IProfileDoc> {
  build(attr: IProfileAttr): IProfileDoc;
}
const profileSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      default: `/uploads/users/default-user.jpg`,
    },
    dateOfBirth: {
      type: Date,
      default: Date.now(),
    },
    address: {
      type: String,
      default: '',
    },
    phoneNumber: {
      type: String,
      default: '',
    },
    facebookUrl: {
      type: String,
      default: '',
    },
    twitterUrl: {
      type: String,
      default: '',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Profile must belong a user!'],
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

profileSchema.statics.build = (attr: IProfileAttr) => {
  return new Profile(attr);
};
const Profile = mongoose.model<IProfileDoc, IProfileModel>(
  'Profile',
  profileSchema
);

export { Profile };
