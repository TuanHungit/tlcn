import mongoose from 'mongoose';

//interface mô tả các thuộc tính của user model
interface UserAttr {
  name: string;
  email: string;
  photo: string;
  role: string;
  password: string;
  passwordChangeAt: Date;
  passwordResetExpires: Date;
}

//interface mô tả các thuộc tính của user document
interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  photo: string;
  role: string;
  password: string;
  passwordChangeAt: Date;
  passwordResetExpires: Date;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attr: UserAttr): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordChangeAt: Date,
    passwordResetExpires: Date,
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._it;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attr: UserAttr) => {
  return new User(attr);
};
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);
export { User };
