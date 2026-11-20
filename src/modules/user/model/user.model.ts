import { Schema, model } from "mongoose";
import { Gender, Providers } from "../../auth/enum/enum";
import { IUser } from "../interface/user.interface";

const userSchema = new Schema<IUser>({
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true,
  },
  password: {
    type: String,
    required: function (this) {
      return this.provider === Providers.LOCAL;
    },
    trim: true,
    minlength: 6,
  },
  provider: {
    type: Number,
    enum: Object.values(Providers),
    default: Providers.LOCAL,
  },
  gender: {
    type: Number,
    default: Gender.MALE,
    enum: Gender,
  },
});

export const User = model("userSchema", userSchema);
