import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockReviews extends IBlock {}

export const BlockReviewsSchema = new Schema<IBlockReviews>({});

BlockReviewsSchema.add(baseSchema);

export const BlockReviews = model("BlockReviews", BlockReviewsSchema);

export default BlockReviews;
