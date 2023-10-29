import mongoose, { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockRequirementType = BlockType & {
  requirements_list: {
    heading: string;
    text: string;
  }[];
};

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

export const BlockRequirementsSchema = new Schema<BlockRequirementType>({
  requirements_list: [listRequirementsSchema],
  block_name: { type: String, default: BlocsEnum.BlockRequirement, immutable: true },
});

BlockRequirementsSchema.add(baseSchema);

export const BlockRequirements = model("BlockRequirements", BlockRequirementsSchema);

export default BlockRequirements;
