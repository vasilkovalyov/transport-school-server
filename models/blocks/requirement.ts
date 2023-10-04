import mongoose, { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockRequirement extends IBlock {
  list_requirements: {
    heading: string;
    text: string;
  }[];
}

const listRequirementsSchema = new mongoose.Schema({
  heading: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
});

export const BlockRequirementsSchema = new Schema<IBlockRequirement>({
  list_requirements: [listRequirementsSchema],
});

BlockRequirementsSchema.add(baseSchema);

export const BlockRequirements = model("BlockRequirements", BlockRequirementsSchema);

export default BlockRequirements;
