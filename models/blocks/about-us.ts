import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockAboutUsType = BlockType & {
  rich_text: string;
  image?: string;
};

export const BlockAboutUsSchema = new Schema<BlockAboutUsType>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockAboutUs, immutable: true },
  image: { type: String, default: null },
});

BlockAboutUsSchema.add(baseSchema);

export const BlockAboutUs = model("BlockAboutUs", BlockAboutUsSchema);

export default BlockAboutUs;
