import { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export interface IReuseBlockCta {
  _id: string;
  heading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
  block_name: ReuseBlocsEnum;
}

export const BlockCtaSchema = new Schema<IReuseBlockCta>({
  heading: { type: String, required: true },
  use_link_to_contact_page: { type: Boolean, default: false },
  use_phone_cta: { type: Boolean, default: false },
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockCta, immutable: true },
});

export const BlockCta = model("ReuseBlockCta", BlockCtaSchema);

export default BlockCta;
