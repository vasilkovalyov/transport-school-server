import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockStructEducation extends IBlock {}

export const BlockStructEducationSchema = new Schema<IBlockStructEducation>({});

BlockStructEducationSchema.add(baseSchema);

export const BlockStructEducation = model("BlockStructEducation", BlockStructEducationSchema);

export default BlockStructEducation;
