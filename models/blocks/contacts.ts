import { Schema, model } from "mongoose";
import { shortSchema, IBlockСutDown } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockContacts extends IBlockСutDown {}

export const BlockContactsSchema = new Schema<IBlockContacts>({
  block_name: { type: String, default: BlocsEnum.BlockContact, immutable: true },
});

BlockContactsSchema.add(shortSchema);

export const BlockContacts = model("BlockContacts", BlockContactsSchema);

export default BlockContacts;
