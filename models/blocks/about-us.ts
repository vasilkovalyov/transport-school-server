import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockAboutUs extends IBlock {
  rich_text: string;
}

export const BlockAboutUsSchema = new Schema<IBlockAboutUs>({
  rich_text: { type: String, default: null },
});

BlockAboutUsSchema.add(baseSchema);

export const BlockAboutUs = model("BlockAboutUs", BlockAboutUsSchema);

export default BlockAboutUs;
