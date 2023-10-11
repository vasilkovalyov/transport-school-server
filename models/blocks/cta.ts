import { Schema, model } from "mongoose";
import { shortSchema, IBlockСutDown } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockCta extends IBlockСutDown {}

export const BlockCtaSchema = new Schema<IBlockCta>({
  block_name: { type: String, default: BlocsEnum.BlockCta, immutable: true },
});

BlockCtaSchema.add(shortSchema);

export const BlockCta = model("BlockCta", BlockCtaSchema);

export default BlockCta;
