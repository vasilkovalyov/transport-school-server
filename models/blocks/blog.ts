import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockBlogType = BlockType & {
  post_number: number;
};

export const BlockBlogSchema = new Schema<BlockBlogType>({
  post_number: { type: Number, default: null },
  block_name: { type: String, default: BlocsEnum.BlockBlog, immutable: true },
});

BlockBlogSchema.add(baseSchema);

export const BlockBlog = model("BlockBlog", BlockBlogSchema);

export default BlockBlog;
