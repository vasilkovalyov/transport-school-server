import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockAboutCourse extends IBlock {
  rich_text: string;
}

export const BlockAboutCourseSchema = new Schema<IBlockAboutCourse>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockAboutCourse, immutable: true },
});

BlockAboutCourseSchema.add(baseSchema);

export const BlockAboutCourse = model("BlockAboutCourse", BlockAboutCourseSchema);

export default BlockAboutCourse;
