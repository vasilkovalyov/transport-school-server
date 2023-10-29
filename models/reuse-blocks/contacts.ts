import { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export type ReuseBlockContactsType = {
  _id: string;
  heading: string;
  address: string;
  phone: string;
  email: string;
  map_url: string;
  block_name: ReuseBlocsEnum;
  image?: string;
};

export const ReuseBlockContactsSchema = new Schema<ReuseBlockContactsType>({
  heading: { type: String, required: true },
  address: { type: String, default: null },
  phone: { type: String, default: null },
  email: { type: String, default: null },
  map_url: { type: String, default: null },
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockContacts, immutable: true },
  image: { type: String, default: null },
});

export const ReuseBlockContacts = model("ReuseBlockContacts", ReuseBlockContactsSchema);

export default ReuseBlockContacts;
