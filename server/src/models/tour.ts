import mongoose from 'mongoose';
import {
  ILocationsDOC,
  IStartLocationDOC,
  ITourAttrs,
  ITourDoc,
} from '../interfaces/tour';
import slugify from 'slugify';
interface ITourModel extends mongoose.Model<ITourDoc> {
  build(attr: ITourAttrs): ITourDoc;
}
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
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
    destination: {
      type: mongoose.Types.ObjectId,
      ref: 'Destination',
      required: [true, 'Tour must belong a Destination!s'],
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

tourSchema.statics.build = (attr: ITourAttrs) => {
  return new Tour(attr);
};
tourSchema.pre<ITourDoc>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Tour = mongoose.model<ITourDoc, ITourModel>('Tour', tourSchema);
export { Tour };
