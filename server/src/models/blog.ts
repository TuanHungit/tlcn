import mongoose from 'mongoose';
import { BlogAttr, BlogDoc } from '../interfaces/blog';

interface BlogModel extends mongoose.Model<BlogDoc> {
  build(att: BlogAttr): BlogDoc;
}
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    images: {
      type: String,
      default: 'blog_default.png',
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
        },
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

blogSchema.statics.build = (attr: BlogAttr) => {
  return new Blog(attr);
};

const Blog = mongoose.model<BlogDoc, BlogModel>('Blog', blogSchema);

export default Blog;
