import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockAboutCourse extends IBlock {
  rich_text: string;
}

export const BlockAboutCourseSchema = new Schema<IBlockAboutCourse>({
  rich_text: { type: String, default: null },
});

BlockAboutCourseSchema.add(baseSchema);

export const BlockAboutCourse = model("BlockAboutCourse", BlockAboutCourseSchema);

export default BlockAboutCourse;
