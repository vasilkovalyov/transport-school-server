import { Schema, model } from "mongoose";
import { ReuseBlocsEnum } from "./block-enum.type";

export type ReuseBlockCtaType = {
  _id: string;
  heading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
  block_name: ReuseBlocsEnum;
};

export const ReuseBlockCtaSchema = new Schema<ReuseBlockCtaType>({
  heading: { type: String, required: true },
  use_link_to_contact_page: { type: Boolean, default: false },
  use_phone_cta: { type: Boolean, default: false },
  block_name: { type: String, default: ReuseBlocsEnum.ReuseBlockCta, immutable: true },
});

export const ReuseBlockCta = model("ReuseBlockCta", ReuseBlockCtaSchema);

export default ReuseBlockCta;
