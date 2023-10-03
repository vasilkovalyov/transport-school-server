import { Schema, model } from "mongoose";

export type LessonType = "offline" | "online";

export interface ILessonSchedule {
  _id: string;
  heading: string;
  type_group: string;
  type_lesson: LessonType;
  day_start_shedule: string;
  day_end_shedule: string;
  time_schedule: string;
  date_start: string;
}

export const LessonScheduleSchema = new Schema<ILessonSchedule>({
  heading: { type: String, required: true, unique: true },
  type_group: { type: String, default: null },
  type_lesson: { type: String, default: null },
  day_start_shedule: { type: String, default: null },
  day_end_shedule: { type: String, default: null },
  time_schedule: { type: String, default: null },
  date_start: { type: String, default: null },
});

export const LessonSchedule = model("LessonSchedule", LessonScheduleSchema);

export default LessonSchedule;
