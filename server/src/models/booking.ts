import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
      required: [true, 'Booking must belong to a Tour!'],
    },
    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    priceAdults: {
      type: Number,
      require: [true, 'Booking must have a price.'],
    },
    priceChildren: {
      type: Number,
      default: 0,
    },
    priceBaby: {
      type: Number,
      default: 0,
    },
    numOfPersonAdults: {
      type: Number,
      default: 0,
    },
    numOfPersonChildren: {
      type: Number,
      default: 0,
    },
    numOfPersonBaby: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    paymentMethod: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDate: {
      type: Date,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
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

// bookingSchema.pre(/^find/, function (next) {
//   this.populate('user').populate({
//     path: 'tour',
//     select: 'name',
//   });
//   next();
// });

const Booking = mongoose.model('Booking', bookingSchema);

export { Booking };
