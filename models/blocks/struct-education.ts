import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockStructEducation extends IBlock {}

export const BlockStructEducationSchema = new Schema<IBlockStructEducation>({
  block_name: { type: String, default: BlocsEnum.BlockStructEducation, immutable: true },
});

BlockStructEducationSchema.add(baseSchema);

export const BlockStructEducation = model("BlockStructEducation", BlockStructEducationSchema);

export default BlockStructEducation;
