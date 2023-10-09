import { Schema, model } from "mongoose";
import { baseSchema, IBlock } from "./base-model";
import { BlocsEnum } from "./block-enum.type";

export interface IBlockSchedule extends IBlock {
  subheading: string;
  schedule_number: number;
}

export const BlockScheduleSchema = new Schema<IBlockSchedule>({
  subheading: {
    type: String,
    default: null,
  },
  schedule_number: { type: Number, default: null },
  block_name: { type: String, default: BlocsEnum.BlockSchedule, immutable: true },
});

BlockScheduleSchema.add(baseSchema);

export const BlockSchedule = model("BlockSchedule", BlockScheduleSchema);

export default BlockSchedule;
