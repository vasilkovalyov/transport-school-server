import mongoose, { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export interface IReuseBlockFaq {
  _id: string;
  heading: string;
  list_faq: {
    heading: string;
    text: string;
  }[];
  block_name: ReuseBlocsEnum;
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

export const BlockFaqSchema = new Schema<IReuseBlockFaq>({
  heading: { type: String, required: true },
  list_faq: [listFaqSchema],
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockFaq, immutable: true },
});

export const BlockFaq = model("ReuseBlockFaq", BlockFaqSchema);

export default BlockFaq;
