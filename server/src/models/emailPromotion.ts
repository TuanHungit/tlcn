import mongoose from 'mongoose';

const EmailPromotionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    sendedPromotion: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: new Date(),
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
