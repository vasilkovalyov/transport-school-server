import { Schema, model } from "mongoose";
import { baseSchema, BlockType } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export type BlockCourseForPeopleType = BlockType & {
  rich_text: string;
};

export const BlockCourseForPeopleSchema = new Schema<BlockCourseForPeopleType>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockCourseForPeople, immutable: true },
});

BlockCourseForPeopleSchema.add(baseSchema);

export const BlockCourseForPeople = model("BlockCourseForPeople", BlockCourseForPeopleSchema);

export default BlockCourseForPeople;
