import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockContacts extends IBlock {
  address: string;
  phone: string;
  email: string;
  map_link_url: string;
}

export const BlockContactsSchema = new Schema<IBlockContacts>({
  address: { type: String, default: null },
  phone: { type: String, default: null },
  email: { type: String, default: null },
  map_link_url: { type: String, default: null },
});

BlockContactsSchema.add(baseSchema);

export const BlockContacts = model("BlockContacts", BlockContactsSchema);

export default BlockContacts;
