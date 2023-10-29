import mongoose, { Schema, model } from "mongoose";

export type CommonContactsType = ContactsType &
  SocialNetworksType & {
    _id: string;
  };

export type ContactsType = {
  email: string;
  address: string;
  phone: string;
};

export type SocialNetworksType = {
  social_list: SocialItemType[];
};

export type SocialItemType = {
  social_icon: string;
  social_url: string;
};

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

export const CommonContactsSchema = new Schema<CommonContactsType>({
  email: { type: String, default: null },
  address: { type: String, default: null },
  phone: { type: String, default: null },
  social_list: [socialListSchema],
});

export const CommonContacts = model("CommonContacts", CommonContactsSchema);

export default CommonContacts;
