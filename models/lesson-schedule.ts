import { Schema, model } from "mongoose";
import { StudentType } from "./student";

export type LessonType = "offline" | "online";

export type LessonScheduleType = {
  _id: string;
  heading: string;
  type_group: string;
  type_lesson: LessonType;
  days: number[];
  time_start: string;
  time_end: string;
  date_start_event: string;
  max_people: number;
  students: Schema.Types.ObjectId[];
};

export const LessonScheduleSchema = new Schema<LessonScheduleType>(
  {
    heading: { type: String, required: true, unique: true },
    type_group: { type: String, default: null },
    type_lesson: { type: String, default: null },
    days: [{ type: Number, default: null }],
    time_start: { type: String, default: null },
    time_end: { type: String, default: null },
    date_start_event: { type: String, default: null },
    max_people: { type: Number, default: null },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const LessonSchedule = model("LessonSchedule", LessonScheduleSchema);

export default LessonSchedule;
