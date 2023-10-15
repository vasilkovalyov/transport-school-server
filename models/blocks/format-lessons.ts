import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockFormatLessons extends IBlock {
  rich_text: string;
  use_dark_theme: boolean;
}

export const BlockFormatLessonsSchema = new Schema<IBlockFormatLessons>({
  rich_text: { type: String, default: null },
  use_dark_theme: { type: Boolean, default: null },
  block_name: { type: String, default: BlocsEnum.BlockFormatLessons, immutable: true },
});

BlockFormatLessonsSchema.add(baseSchema);

export const BlockFormatLessons = model("BlockFormatLessons", BlockFormatLessonsSchema);

export default BlockFormatLessons;
