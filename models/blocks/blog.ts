import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockBlog extends IBlock {
  post_number: number;
}

export const BlockBlogSchema = new Schema<IBlockBlog>({
  post_number: { type: Number, default: null },
  block_name: { type: String, default: BlocsEnum.BlockBlog, immutable: true },
});

BlockBlogSchema.add(baseSchema);

export const BlockBlog = model("BlockBlog", BlockBlogSchema);

export default BlockBlog;
