import { Schema, model } from "mongoose";
import { shortSchema, BlockShortType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockReviewsType = BlockShortType;

export const BlockReviewsSchema = new Schema<BlockReviewsType>({
  block_name: { type: String, default: BlocsEnum.BlockReviews, immutable: true },
});

BlockReviewsSchema.add(shortSchema);

export const BlockReviews = model("BlockReviews", BlockReviewsSchema);

export default BlockReviews;
