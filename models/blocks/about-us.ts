import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockAboutUs extends IBlock {
  rich_text: string;
}

export const BlockAboutUsSchema = new Schema<IBlockAboutUs>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockAboutUs, immutable: true },
});

BlockAboutUsSchema.add(baseSchema);

export const BlockAboutUs = model("BlockAboutUs", BlockAboutUsSchema);

export default BlockAboutUs;
