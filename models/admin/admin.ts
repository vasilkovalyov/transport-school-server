import { Schema, model } from "mongoose";
import { IUser } from "../../types/admin";

export const UserSchema = new Schema<IUser>({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("User", UserSchema);

export default User;
