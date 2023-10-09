import mongoose, { Schema, model } from "mongoose";

export interface ICommonContacts extends IContacts, ISocialNetworks {
  _id: string;
}

export interface IContacts {
  email: string;
  address: string;
  phone: string;
}

export interface ISocialNetworks {
  social_list: ISocialItem[];
}

export interface ISocialItem {
  social_icon: string;
  social_url: string;
}

const socialListSchema = new mongoose.Schema({
  social_icon: {
    type: String,
    default: null,
  },
  social_url: {
    type: String,
    default: null,
  },
});

export const CommonContactsSchema = new Schema<ICommonContacts>({
  email: { type: String, default: null },
  address: { type: String, default: null },
  phone: { type: String, default: null },
  social_list: [socialListSchema],
});

export const CommonContacts = model("CommonContacts", CommonContactsSchema);

export default CommonContacts;
