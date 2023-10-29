import mongoose, { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export type ReuseBlockFaqType = {
  _id: string;
  heading: string;
  list_faq: {
    _id: string;
    heading: string;
    rich_text: string;
  }[];
  block_name: ReuseBlocsEnum;
  image?: string;
};

const listFaqSchema = new mongoose.Schema({
  heading: {
    type: String,
    default: null,
  },
  rich_text: {
    type: String,
    default: null,
  },
});

export const BlockFaqSchema = new Schema<ReuseBlockFaqType>({
  heading: { type: String, required: true },
  list_faq: [listFaqSchema],
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockFaq, immutable: true },
  image: { type: String, default: null },
});

export const BlockFaq = model("ReuseBlockFaq", BlockFaqSchema);

export default BlockFaq;
