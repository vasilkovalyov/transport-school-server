import { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export interface IReuseBlockReview {
  _id: string;
  heading: string;
  block_name: ReuseBlocsEnum;
}

export const BlockReviewSchema = new Schema<IReuseBlockReview>({
  heading: {
    type: String,
  },
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockReview, immutable: true },
});

export const BlockReview = model("ReuseBlockReview", BlockReviewSchema);

export default BlockReview;
