import { Model, Schema, model } from "mongoose";

export type StudentCreateType = Omit<StudentType, "_id" | "lessons"> & {
  lesson: string;
};

export type StudentType = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  lessons: Schema.Types.ObjectId[];
};

export const StudentSchema = new Schema<StudentType>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    lessons: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lesson",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Student = model("Student", StudentSchema);

export default Student;
