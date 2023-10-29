import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockWhoTeachType = BlockType & {
  rich_text: string;
  image?: string;
};

export const BlockWhoTeachSchema = new Schema<BlockWhoTeachType>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockWhoTeach, immutable: true },
  image: { type: String, default: null },
});

BlockWhoTeachSchema.add(baseSchema);

export const BlockWhoTeach = model("BlockWhoTeach", BlockWhoTeachSchema);

export default BlockWhoTeach;
