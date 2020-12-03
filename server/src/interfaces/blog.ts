import mongoose from 'mongoose';
export interface IComments {
  user: mongoose.Schema.Types.ObjectId;
  text: string;
  name: string;
  avatar: string;
}
export interface IBlogAttr {
  title: string;
  user: mongoose.Schema.Types.ObjectId;
  content: string;
  createAt: Date;
  active: Boolean;
  likes: { user: mongoose.Schema.Types.ObjectId }[];
  comments: [IComments];
}
export interface IBlogDoc extends mongoose.Document {
  title: string;
  user: mongoose.Schema.Types.ObjectId;
  content: string;
  slug: string;
  createAt: Date;
  active: boolean;
  likes: [{ user: mongoose.Schema.Types.ObjectId }];
  comments: [IComments];
}
