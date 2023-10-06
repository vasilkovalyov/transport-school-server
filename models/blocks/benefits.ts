import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockBenefits extends IBlock {
  rich_text: string;
}

export const BlockBenefitsSchema = new Schema<IBlockBenefits>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockBenefits, immutable: true },
});

BlockBenefitsSchema.add(baseSchema);

export const BlockBenefits = model("BlockBenefits", BlockBenefitsSchema);

export default BlockBenefits;
