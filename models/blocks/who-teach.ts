import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockWhoTeach extends IBlock {
  rich_text: string;
}

export const BlockWhoTeachSchema = new Schema<IBlockWhoTeach>({
  rich_text: { type: String, default: null },
});

BlockWhoTeachSchema.add(baseSchema);

export const BlockWhoTeach = model("BlockWhoTeach", BlockWhoTeachSchema);

export default BlockWhoTeach;
