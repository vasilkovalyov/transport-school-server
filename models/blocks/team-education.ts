import mongoose, { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockTeamEducation extends IBlock {
  subheading: string;
  education_list: {
    heading: string;
    type: string;
    discount: string;
  }[];
  use_cta_link: boolean;
}

const listEducationSchema = new mongoose.Schema({
  heading: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  discount: {
    type: String,
    default: null,
  },
});

export const BlockTeamEducationSchema = new Schema<IBlockTeamEducation>({
  subheading: { type: String, default: null },
  education_list: [listEducationSchema],
  use_cta_link: { type: Boolean, default: null },
  block_name: { type: String, default: BlocsEnum.BlockTeamEducation, immutable: true },
});

BlockTeamEducationSchema.add(baseSchema);

export const BlockTeamEducation = model("BlockTeamEducation", BlockTeamEducationSchema);

export default BlockTeamEducation;
