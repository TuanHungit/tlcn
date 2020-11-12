import mongoose from 'mongoose';
import {
  ICountryDoc,
  IDestinationAttr,
  IDestinationDoc,
  IDestinationModel,
} from '../interfaces/destination';
const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    summary: {
      type: String,
      required: true,
    },
    images: [String],
    destination: [
      {
        country: String,
        description: String,
      },
    ],
    numOfTour: {
      type: Number,
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

destinationSchema.statics.build = (attr: IDestinationAttr) => {
  return new Destination(attr);
};

const Destination = mongoose.model<IDestinationDoc, IDestinationModel>(
  'Destination',
  destinationSchema
);

export { Destination };
