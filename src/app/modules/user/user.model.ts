import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import { userRole } from './user.constant';
import { config } from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: userRole,
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false },
);
//Hash password before saving into DB
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
//Set Passwort '' after saving the user into DB
userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});
export const User = model<TUser>('User', userSchema);
