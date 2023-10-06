import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockFormatLessons extends IBlock {
  subheading: string;
}

export const BlockFormatLessonsSchema = new Schema<IBlockFormatLessons>({
  subheading: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockFormatLessons, immutable: true },
});

BlockFormatLessonsSchema.add(baseSchema);

export const BlockFormatLessons = model("BlockFormatLessons", BlockFormatLessonsSchema);

export default BlockFormatLessons;
