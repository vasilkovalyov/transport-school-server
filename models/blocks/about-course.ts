import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockAboutCourseType = BlockType & {
  rich_text: string;
  image?: string;
};

export const BlockAboutCourseSchema = new Schema<BlockAboutCourseType>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockAboutCourse, immutable: true },
  image: { type: String, default: null },
});

BlockAboutCourseSchema.add(baseSchema);

export const BlockAboutCourse = model("BlockAboutCourse", BlockAboutCourseSchema);

export default BlockAboutCourse;
