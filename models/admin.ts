import { Schema, model } from "mongoose";

export type UserType = {
  _id: String;
  login: string;
  password: string;
};

export const UserSchema = new Schema<UserType>({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("User", UserSchema);

export default User;
