import { Schema, model } from "mongoose";
import { shortSchema, IBlockСutDown } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockFaq extends IBlockСutDown {}

export const BlockFaqSchema = new Schema<IBlockFaq>({
  block_name: { type: String, default: BlocsEnum.BlockContact, immutable: true },
});

BlockFaqSchema.add(shortSchema);

export const BlockFaq = model("BlockFaq", BlockFaqSchema);

export default BlockFaq;
