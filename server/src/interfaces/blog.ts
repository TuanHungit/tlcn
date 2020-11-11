import mongoose from 'mongoose';
export interface IComments {
  user: mongoose.Schema.Types.ObjectId;
  text: String;
  name: String;
  avatar: String;
}
export interface IBlogAttr {
  title: String;
  user: mongoose.Schema.Types.ObjectId;
  createAt: Date;
  active: Boolean;
  likes: { user: mongoose.Schema.Types.ObjectId }[];
  comments: [IComments];
}
export interface IBlogDoc extends mongoose.Document {
  title: String;
  user: mongoose.Schema.Types.ObjectId;
  createAt: Date;
  active: Boolean;
  likes: [{ user: mongoose.Schema.Types.ObjectId }];
  comments: [IComments];
}
