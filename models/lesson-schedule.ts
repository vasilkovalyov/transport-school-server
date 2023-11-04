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
  date_start_event: Date;
  max_people: number;
  students: Schema.Types.ObjectId[];
};

export const LessonScheduleSchema = new Schema<LessonScheduleType>(
  {
    heading: { type: String, required: true, unique: true },
    type_group: { type: String, default: null, required: true },
    type_lesson: { type: String, default: null, required: true },
    days: [{ type: Number, default: null, required: true }],
    time_start: { type: String, default: null, required: true },
    time_end: { type: String, default: null, required: true },
    date_start_event: { type: Date, default: null, required: true },
    max_people: { type: Number, default: null, required: true },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        default: [],
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const LessonSchedule = model("LessonSchedule", LessonScheduleSchema);

export default LessonSchedule;
