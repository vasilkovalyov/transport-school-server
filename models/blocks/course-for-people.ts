import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockCourseForPeople extends IBlock {
  rich_text: string;
}

export const BlockCourseForPeopleSchema = new Schema<IBlockCourseForPeople>({
  rich_text: { type: String, default: null },
});

BlockCourseForPeopleSchema.add(baseSchema);

export const BlockCourseForPeople = model("BlockCourseForPeople", BlockCourseForPeopleSchema);

export default BlockCourseForPeople;
