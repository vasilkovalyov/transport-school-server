import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockAboutType = BlockType & {
  rich_text: string;
};

export const BlockAboutSchema = new Schema<BlockAboutType>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockAbout, immutable: true },
});

BlockAboutSchema.add(baseSchema);

export const BlockAbout = model("BlockAbout", BlockAboutSchema);

export default BlockAbout;
