import mongoose from 'mongoose';

interface TourAttrs { 
    name: String,
    price: Number,
    priceDiscount: Number,
    ratingAverage: Number,
    ratingsQuantity: Number,
    summary: String,
    description: String,
    imageCover: String,
    images: [String],
    startDates: [String],
    startLocation: any,
    locations: any
}

interface TourDoc extends mongoose.Document { 
    name: String,
    price: Number,
    priceDiscount: Number,
    ratingAverage: Number,
    ratingsQuantity: Number,
    summary: String,
    description: String,
    imageCover: String,
    images: [String],
    startDates: [String],
    startLocation: any,
    locations: any
}

interface TourModel extends mongoose.Model<TourDoc> {
  build(attr: TourDoc): TourDoc;
}
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceDiscount: {
        type: Number,
    },
    ratingAverage: {
        type: Number,
        set: val => Math.round(val * 10)/ 10
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    summary: {
        type: String,
        trim: true,
      },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    startDates: [Date],
    startLocation: {
      // GeoJSON
      type:String,
      coordinates: [Number],
      address: String,
      description: String
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number
      }
    ],

}, {
        toJSON: {
            transform(doc, ret) { 
                ret.id = ret._id;
                delete ret._it;
                delete ret.__v;
            }
        }
})

tourSchema.statics.build = (attr: TourAttrs) => {
  return new Tour(attr);
};
const Tour = mongoose.model<TourDoc, TourModel>('User', tourSchema);
export { Tour };