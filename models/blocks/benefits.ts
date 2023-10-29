import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockBenefitsType = BlockType & {
  rich_text: string;
  image?: string;
};

export const BlockBenefitsSchema = new Schema<BlockBenefitsType>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockBenefits, immutable: true },
  image: { type: String, default: null },
});

BlockBenefitsSchema.add(baseSchema);

export const BlockBenefits = model("BlockBenefits", BlockBenefitsSchema);

export default BlockBenefits;
