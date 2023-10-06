import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockContactForm extends IBlock {
  rich_text: string;
  form_heading: string;
  require_message: string;
}

export const BlockContactFormSchema = new Schema<IBlockContactForm>({
  rich_text: { type: String, default: null },
  form_heading: { type: String, default: null },
  require_message: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockContactForm, immutable: true },
});

BlockContactFormSchema.add(baseSchema);

export const BlockContactForm = model("BlockContactForm", BlockContactFormSchema);

export default BlockContactForm;
