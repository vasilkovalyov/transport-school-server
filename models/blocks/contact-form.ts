import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockContactFormType = BlockType & {
  rich_text: string;
  form_heading: string;
  require_message: string;
  image?: string;
};

export const BlockContactFormSchema = new Schema<BlockContactFormType>({
  rich_text: { type: String, default: null },
  form_heading: { type: String, default: null },
  require_message: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockContactForm, immutable: true },
  image: { type: String, default: null },
});

BlockContactFormSchema.add(baseSchema);

export const BlockContactForm = model("BlockContactForm", BlockContactFormSchema);

export default BlockContactForm;
