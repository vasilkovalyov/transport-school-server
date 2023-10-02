import { Schema, model } from "mongoose";

export interface IUser {
  _id: String;
  login: string;
  password: string;
}

export const UserSchema = new Schema<IUser>({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("User", UserSchema);

export default User;
