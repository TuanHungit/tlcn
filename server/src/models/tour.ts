import mongoose from 'mongoose';

// interface startLocationAttr {
//   type: String;
//   coordinates: [Number];
//   address: String;
//   description: String;
// }
// interface locationsAttr {
//   type: String;
//   coordinates: [Number];
//   address: String;
//   description: String;
//   day: Number;
// }
interface TourAttrs {
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
  startLocation: String;
  locations: [String];
  duration: Number;
  comments: [String];
}

interface TourDoc extends mongoose.Document {
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
  startLocation: String;
  locations: [String];
  comments: [String];
}

interface TourModel extends mongoose.Model<TourDoc> {
  build(attr: TourAttrs): TourDoc;
}
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    priceDiscount: {
      type: Number,
    },
    ratingsAverage: {
      type: Number,
      set: (val: any) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
    },
    summary: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    availableDate: [Date],
    startLocation: {
      // GeoJSON
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
        },
        text: {
          type: String,
          required: true,
        },
        name: {
          type: String,
        },
        avatar: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
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

tourSchema.statics.build = (attr: TourAttrs) => {
  return new Tour(attr);
};
const Tour = mongoose.model<TourDoc, TourModel>('Tour', tourSchema);
export { Tour };
