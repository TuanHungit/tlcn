import mongoose from 'mongoose';
import { ISurverDoc } from '../interfaces/survey';
const surveySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    age: {
      type: Number,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    time: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    numOfLocation: {
      type: Number,
      required: true,
    },
    feedback: {
      type: String,
      default: 'Không có ý kiến',
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

const Survey = mongoose.model<ISurverDoc>('Survey', surveySchema);

export { Survey };
