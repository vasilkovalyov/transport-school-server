import { Schema, model } from "mongoose";

export interface IBlockHero {
  _id: string;
  block_order: number;
  block_page: string;
  heading: string;
  subheading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
}

export const BlockHeroSchema = new Schema<IBlockHero>({
  block_order: { type: Number, default: null },
  block_page: { type: String, default: null },
  heading: { type: String, required: true, unique: true },
  subheading: { type: String },
  use_link_to_contact_page: { type: Boolean, default: null },
  use_phone_cta: { type: Boolean, default: null },
});

export const BlockHero = model("BlockHero", BlockHeroSchema);

export default BlockHero;
