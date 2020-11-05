import mongoose from 'mongoose';
import { Type } from 'typescript';
export interface Comments {
  user: mongoose.Schema.Types.ObjectId;
  text: String;
  name: String;
  avatar: String;
}
export interface BlogAttr {
  title: String;
  user: mongoose.Schema.Types.ObjectId;
  createAt: Date;
  active: Boolean;
  likes: { user: mongoose.Types.ObjectId }[];
  comments: [Comments];
}
export interface BlogDoc extends mongoose.Document {
  title: String;
  user: mongoose.Schema.Types.ObjectId;
  createAt: Date;
  active: Boolean;
  likes: [{ user: mongoose.Types.ObjectId }];
  comments: [Comments];
}
