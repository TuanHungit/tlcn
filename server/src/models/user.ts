import mongoose from 'mongoose';
import { Password } from '../services/password';
//interface mô tả các thuộc tính của user model
interface UserAttr {
  name: string;
  email: string;
  password: string;
}

//interface mô tả các thuộc tính của user document
interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  role: string;
  active: Boolean;
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

    role: {
      type: String,
      enum: ['user', 'guide', 'lead-guide', 'admin'],
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },

    passwordChangeAt: Date,
    passwordResetExpires: Date,
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  next();
});
userSchema.statics.build = (attr: UserAttr) => {
  return new User(attr);
};
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);
export { User };
