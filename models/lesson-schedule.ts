import { Schema, model } from "mongoose";

export type LessonType = "offline" | "online";

export interface ILessonSchedule {
  _id: string;
  heading: string;
  type_group: string;
  type_lesson: LessonType;
  day_start: number;
  day_end: number;
  time_start: string;
  time_end: string;
  date_start_event: string;
}

export const LessonScheduleSchema = new Schema<ILessonSchedule>(
  {
    heading: { type: String, required: true, unique: true },
    type_group: { type: String, default: null },
    type_lesson: { type: String, default: null },
    day_start: { type: Number, default: null },
    day_end: { type: Number, default: null },
    time_start: { type: String, default: null },
    time_end: { type: String, default: null },
    date_start_event: { type: String, default: null },
  },
  {
    timestamps: true,
  },
);

export const LessonSchedule = model("LessonSchedule", LessonScheduleSchema);

export default LessonSchedule;
