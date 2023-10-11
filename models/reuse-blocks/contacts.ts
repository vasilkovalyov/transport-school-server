import { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export interface IReuseBlockContacts {
  _id: string;
  heading: string;
  address: string;
  phone: string;
  email: string;
  map_url: string;
  block_name: ReuseBlocsEnum;
}

export const BlockContactsSchema = new Schema<IReuseBlockContacts>({
  heading: { type: String, required: true },
  address: { type: String, default: null },
  phone: { type: String, default: null },
  email: { type: String, default: null },
  map_url: { type: String, default: null },
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockContacts, immutable: true },
});

export const BlockContacts = model("ReuseBlockContacts", BlockContactsSchema);

export default BlockContacts;
