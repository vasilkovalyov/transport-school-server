import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockServices extends IBlock {
  subheading: string;
}

export const BlockServicesSchema = new Schema<IBlockServices>({
  subheading: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockServices, immutable: true },
});

BlockServicesSchema.add(baseSchema);

export const BlockServices = model("BlockServices", BlockServicesSchema);

export default BlockServices;
