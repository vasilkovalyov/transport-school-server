import mongoose, { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export type ReuseBlockAchivmentsType = {
  _id: string;
  heading: string;
  subheading: string;
  list_achivments: {
    heading: string;
    text: string;
  }[];
  block_name: ReuseBlocsEnum;
};

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

export const BlockAchivmentsSchema = new Schema<ReuseBlockAchivmentsType>({
  heading: { type: String, required: true },
  subheading: { type: String, default: null },
  list_achivments: [listAchivmentSchema],
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockAchivments, immutable: true },
});

export const BlockAchivments = model("ReuseBlockAchivments", BlockAchivmentsSchema);

export default BlockAchivments;
