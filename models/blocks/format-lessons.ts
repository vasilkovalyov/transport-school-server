import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockFormatLessons extends IBlock {
  subheading: string;
}

export const BlockFormatLessonsSchema = new Schema<IBlockFormatLessons>({
  subheading: { type: String, default: null },
});

BlockFormatLessonsSchema.add(baseSchema);

export const BlockFormatLessons = model("BlockFormatLessons", BlockFormatLessonsSchema);

export default BlockFormatLessons;
