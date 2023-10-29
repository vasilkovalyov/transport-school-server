import { Schema, model } from "mongoose";
import { shortSchema, BlockShortType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockFaqType = BlockShortType;

export const BlockFaqSchema = new Schema<BlockFaqType>({
  block_name: { type: String, default: BlocsEnum.BlockContact, immutable: true },
});

BlockFaqSchema.add(shortSchema);

export const BlockFaq = model("BlockFaq", BlockFaqSchema);

export default BlockFaq;
