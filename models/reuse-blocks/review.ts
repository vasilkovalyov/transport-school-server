import { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export type ReuseBlockReviewType = {
  _id: string;
  heading: string;
  block_name: ReuseBlocsEnum;
};

export const BlockReviewSchema = new Schema<ReuseBlockReviewType>({
  heading: {
    type: String,
  },
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockReview, immutable: true },
});

export const BlockReview = model("ReuseBlockReview", BlockReviewSchema);

export default BlockReview;
