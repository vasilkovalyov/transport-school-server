import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockCourseForPeople extends IBlock {
  rich_text: string;
}

export const BlockCourseForPeopleSchema = new Schema<IBlockCourseForPeople>({
  rich_text: { type: String, default: null },
  block_name: { type: String, default: BlocsEnum.BlockCourseForPeople, immutable: true },
});

BlockCourseForPeopleSchema.add(baseSchema);

export const BlockCourseForPeople = model("BlockCourseForPeople", BlockCourseForPeopleSchema);

export default BlockCourseForPeople;
