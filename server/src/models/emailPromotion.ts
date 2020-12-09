import mongoose from 'mongoose';

const EmailPromotionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    status: {
      type: Boolean,
      default: true,
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

const EmailPromotion = mongoose.model('EmailPromotion', EmailPromotionSchema);

export { EmailPromotion };
