import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockBenefits extends IBlock {
  rich_text: string;
}

export const BlockBenefitsSchema = new Schema<IBlockBenefits>({
  rich_text: { type: String, default: null },
});

BlockBenefitsSchema.add(baseSchema);

export const BlockBenefits = model("BlockBenefits", BlockBenefitsSchema);

export default BlockBenefits;
