import mongoose from 'mongoose';
import slugify from 'slugify';
import { IPromotionDoc } from '../interfaces/promotion';
const PromotionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageCovert: {
      type: String,
      default:
        'https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/news/ems1606710467.jpg',
    },
    code: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    startDate: {
      type: Date,
      default: new Date(),
    },
    endDate: {
      type: Date,
      default: new Date(),
    },
    slug: {
      type: String,
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
PromotionSchema.pre<IPromotionDoc>('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Promotion = mongoose.model('Promotion', PromotionSchema);

export { Promotion };
