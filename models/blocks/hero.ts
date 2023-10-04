import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockHero extends IBlock {
  subheading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
}

export const BlockHeroSchema = new Schema<IBlockHero>({
  subheading: { type: String },
  use_link_to_contact_page: { type: Boolean, default: null },
  use_phone_cta: { type: Boolean, default: null },
});

BlockHeroSchema.add(baseSchema);

export const BlockHero = model("BlockHero", BlockHeroSchema);

export default BlockHero;
