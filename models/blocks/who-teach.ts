import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockWhoTeach extends IBlock {
  rich_text: string;
}

export const BlockWhoTeachSchema = new Schema<IBlockWhoTeach>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockWhoTeach, immutable: true },
});

BlockWhoTeachSchema.add(baseSchema);

export const BlockWhoTeach = model("BlockWhoTeach", BlockWhoTeachSchema);

export default BlockWhoTeach;
