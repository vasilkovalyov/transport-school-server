import mongoose, { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IFaq {
  heading: string;
  text: string;
}

export interface IBlockFaq extends IBlock {
  list_faq: IFaq[];
}

const listFaqSchema = new mongoose.Schema({
  heading: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
});

export const BlockFaqSchema = new Schema<IBlockFaq>({
  list_faq: [listFaqSchema],
  block_name: { type: String, default: BlocsEnum.BlockFaq, immutable: true },
});

BlockFaqSchema.add(baseSchema);

export const BlockFaq = model("BlockFaq", BlockFaqSchema);

export default BlockFaq;
