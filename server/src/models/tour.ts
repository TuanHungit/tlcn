import mongoose from 'mongoose';
import {
  ILocationsDOC,
  IStartLocationDOC,
  ITourAttrs,
  ITourDoc,
} from '../interfaces/tour';
import slugify from 'slugify';
import { Destination } from './destination';
interface ITourModel extends mongoose.Model<ITourDoc> {
  build(attr: ITourAttrs): ITourDoc;
  calculateNumberOfTour(destinationId: any): ITourDoc;
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
    priceAdults: {
      type: Number,
      required: true,
        default: 0
    },
    priceChildren: {
      type: Number,
      default: 0,
    },
    priceBaby: {
      type: Number,
      default: 0,
    },
    country: {
      type: String,
    },
    priceDiscount: {
      type: Number,
      default: 0,
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
        title: String,
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
        delete ret._id;
        delete ret.__v;
      },
      virtuals: true,
    },
    toObject: { virtuals: true },
  }
);
tourSchema.index({ reviews: 1 });

tourSchema.index({ price: 1, ratingsAverage: -1 });
tourSchema.index({ slug: 1 });
tourSchema.index({ startLocation: '2dsphere' });

tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});
tourSchema.statics.build = (attr: ITourAttrs) => {
  return new Tour(attr);
};

tourSchema.statics.calculateNumberOfTour = async function (destId: any) {
  const stats = await this.aggregate([
    {
      $match: { destination: destId },
    },
    {
      $group: {
        _id: '$destination',
        nName: { $sum: 1 },
      },
    },
  ]);
  // console.log(stats);

  if (stats.length > 0) {
    await Destination.findByIdAndUpdate(destId, {
      numOfTour: stats[0].nName,
    });
  } else {
    await Destination.findByIdAndUpdate(destId, {
      numOfTour: 0,
    });
  }
};

tourSchema.post<ITourDoc>('save', function (this: any) {
  // this points to current review
  this.constructor.calculateNumberOfTour(this.destination);
});

tourSchema.pre<ITourDoc>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Tour = mongoose.model<ITourDoc, ITourModel>('Tour', tourSchema);
export { Tour };
