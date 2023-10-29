import { Schema, model } from "mongoose";
import { shortSchema, BlockShortType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockContactsType = BlockShortType;

export const BlockContactsSchema = new Schema<BlockContactsType>({
  block_name: { type: String, default: BlocsEnum.BlockContact, immutable: true },
});

BlockContactsSchema.add(shortSchema);

export const BlockContacts = model("BlockContacts", BlockContactsSchema);

export default BlockContacts;
