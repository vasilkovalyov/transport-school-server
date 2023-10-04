import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockCta extends IBlock {
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
}

export const BlockCtaSchema = new Schema<IBlockCta>({
  use_link_to_contact_page: { type: Boolean, default: null },
  use_phone_cta: { type: Boolean, default: null },
});

BlockCtaSchema.add(baseSchema);

export const BlockCta = model("BlockCta", BlockCtaSchema);

export default BlockCta;
