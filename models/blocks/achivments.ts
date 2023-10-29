import { Schema, model } from "mongoose";
import { shortSchema, BlockShortType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockAchivmentsType = BlockShortType;

export const BlockAchivmentsSchema = new Schema<BlockAchivmentsType>({
  block_name: { type: String, default: BlocsEnum.BlockAchivments, immutable: true },
});

BlockAchivmentsSchema.add(shortSchema);

export const BlockAchivments = model("BlockAchivments", BlockAchivmentsSchema);

export default BlockAchivments;
