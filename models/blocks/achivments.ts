import { Schema, model } from "mongoose";
import { shortSchema, IBlockСutDown } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockAchivments extends IBlockСutDown {}

export const BlockAchivmentsSchema = new Schema<IBlockAchivments>({
  block_name: { type: String, default: BlocsEnum.BlockAchivments, immutable: true },
});

BlockAchivmentsSchema.add(shortSchema);

export const BlockAchivments = model("BlockAchivments", BlockAchivmentsSchema);

export default BlockAchivments;
