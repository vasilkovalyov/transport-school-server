import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockAbout extends IBlock {
  rich_text: string;
}

export const BlockAboutSchema = new Schema<IBlockAbout>({
  rich_text: { type: String, default: null },
});

BlockAboutSchema.add(baseSchema);

export const BlockAbout = model("BlockAbout", BlockAboutSchema);

export default BlockAbout;
