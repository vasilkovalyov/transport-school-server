import mongoose, { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockTeamEducation extends IBlock {
  subheading: string;
  list_education: {
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
  list_education: [listEducationSchema],
  use_cta_link: { type: Boolean, default: null },
});

BlockTeamEducationSchema.add(baseSchema);

export const BlockTeamEducation = model("BlockTeamEducation", BlockTeamEducationSchema);

export default BlockTeamEducation;
