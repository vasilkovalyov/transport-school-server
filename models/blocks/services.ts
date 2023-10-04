import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockServices extends IBlock {
  subheading: string;
}

export const BlockServicesSchema = new Schema<IBlockServices>({
  subheading: { type: String, default: null },
});

BlockServicesSchema.add(baseSchema);

export const BlockServices = model("BlockServices", BlockServicesSchema);

export default BlockServices;
