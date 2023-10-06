import mongoose, { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockAchivments extends IBlock {
  subheading: string;
  list_achivments: {
    heading: string;
    text: string;
  }[];
}

const listAchivmentSchema = new mongoose.Schema({
  heading: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
});

export const BlockAchivmentsSchema = new Schema<IBlockAchivments>({
  subheading: { type: String, default: null },
  list_achivments: [listAchivmentSchema],
  block_name: { type: String, default: BlocsEnum.BlockAchivments, immutable: true },
});

BlockAchivmentsSchema.add(baseSchema);

export const BlockAchivments = model("BlockAchivments", BlockAchivmentsSchema);

export default BlockAchivments;
