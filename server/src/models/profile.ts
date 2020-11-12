import mongoose from 'mongoose';

import { IProfileAttr, IProfileDoc } from '../interfaces/profile';

interface IProfileModel extends mongoose.Model<IProfileDoc> {
  build(attr: IProfileAttr): IProfileDoc;
}
const profileSchema = new mongoose.Schema(
  {
    dateOfBirth: {
      type: Date,
    },
    country: {
      type: String,
    },
    street: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    facebookUrl: {
      type: String,
    },
    twitterUrl: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._it;
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
