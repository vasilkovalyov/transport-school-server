import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockHeroType = BlockType & {
  subheading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
};

export const BlockHeroSchema = new Schema<BlockHeroType>({
  subheading: { type: String },
  use_link_to_contact_page: { type: Boolean, default: null },
  use_phone_cta: { type: Boolean, default: null },
  block_name: { type: String, default: BlocsEnum.BlockHero, immutable: true },
});

BlockHeroSchema.add(baseSchema);

export const BlockHero = model("BlockHero", BlockHeroSchema);

export default BlockHero;
