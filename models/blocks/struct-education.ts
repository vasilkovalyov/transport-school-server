import mongoose, { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockStructEducationType = BlockType & {
  struct_education_list: {
    _id: string;
    heading: string;
    rich_text: string;
  }[];
};

const structEducationListSchema = new mongoose.Schema({
  heading: {
    type: String,
    default: null,
  },
  rich_text: {
    type: String,
    default: null,
  },
});

export const BlockStructEducationSchema = new Schema<BlockStructEducationType>({
  struct_education_list: [structEducationListSchema],
  block_name: { type: String, default: BlocsEnum.BlockStructEducation, immutable: true },
});

BlockStructEducationSchema.add(baseSchema);

export const BlockStructEducation = model("BlockStructEducation", BlockStructEducationSchema);

export default BlockStructEducation;
