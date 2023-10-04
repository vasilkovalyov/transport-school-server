import mongoose, { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

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
});

BlockFaqSchema.add(baseSchema);

export const BlockFaq = model("BlockFaq", BlockFaqSchema);

export default BlockFaq;
