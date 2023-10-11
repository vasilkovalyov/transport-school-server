import { Schema, model } from "mongoose";
import { shortSchema, IBlockСutDown } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockReviews extends IBlockСutDown {}

export const BlockReviewsSchema = new Schema<IBlockReviews>({
  block_name: { type: String, default: BlocsEnum.BlockReviews, immutable: true },
});

BlockReviewsSchema.add(shortSchema);

export const BlockReviews = model("BlockReviews", BlockReviewsSchema);

export default BlockReviews;
