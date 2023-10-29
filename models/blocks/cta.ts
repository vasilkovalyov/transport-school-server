import { Schema, model } from "mongoose";
import { shortSchema, BlockShortType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockCtaType = BlockShortType;

export const BlockCtaSchema = new Schema<BlockCtaType>({
  block_name: { type: String, default: BlocsEnum.BlockCta, immutable: true },
});

BlockCtaSchema.add(shortSchema);

export const BlockCta = model("BlockCta", BlockCtaSchema);

export default BlockCta;
