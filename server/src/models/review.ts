import mongoose from 'mongoose';
import { Tour } from './tour';
import { IReviewAttr, IReviewDoc } from '../interfaces/review';

interface IReviewModel extends mongoose.Model<IReviewDoc> {
  build(attr: IReviewAttr): IReviewDoc;
  populate(): any;
}
const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review can not be empty!'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tour: {
      type: mongoose.Types.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour.'],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

reviewSchema.pre<IReviewDoc>(/^find/, function (next) {
  // this.populate({
  //   path: 'tour',
  //   select: 'name'
  // }).populate({
  //   path: 'user',
  //   select: 'name photo'
  // });

  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});
reviewSchema.statics.build = (attr: IReviewAttr) => {
  return new Review(attr);
};
reviewSchema.statics.calcAverageRatings = async function (tourId: any) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  // console.log(stats);

  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
    });
  }
};

reviewSchema.post<IReviewDoc>('save', function (this: any) {
  // this points to current review
  this.constructor.calcAverageRatings(this.tour);
});

const Review = mongoose.model<IReviewDoc, IReviewModel>('Review', reviewSchema);
export { Review };
