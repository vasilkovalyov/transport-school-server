import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockReviews extends IBlock {}

export const BlockReviewsSchema = new Schema<IBlockReviews>({
  block_name: { type: String, default: BlocsEnum.BlockReviews, immutable: true },
});

BlockReviewsSchema.add(baseSchema);

export const BlockReviews = model("BlockReviews", BlockReviewsSchema);

export default BlockReviews;
