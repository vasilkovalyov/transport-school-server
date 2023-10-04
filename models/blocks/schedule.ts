import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";

export interface IBlockSchedule extends IBlock {
  subheading: string;
}

export const BlockScheduleSchema = new Schema<IBlockSchedule>({
  subheading: {
    type: String,
    default: null,
  },
});

BlockScheduleSchema.add(baseSchema);

export const BlockSchedule = model("BlockSchedule", BlockScheduleSchema);

export default BlockSchedule;
