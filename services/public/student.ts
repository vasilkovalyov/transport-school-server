import { Schema } from "mongoose";
import { StudentCreateType, StudentModel, LessonScheduleModel } from "../../models";

class StudentService {
  async create({ lesson, ...props }: StudentCreateType) {
    const lessonFromDb = await LessonScheduleModel.findById(lesson);
    if (!lessonFromDb) {
      throw new Error("Lesson not found");
    }

    const studentFromDb = await StudentModel.findOne({ email: props.email });

    const successMessage = "Вы успешно загеристрировались на урок, мы отправили сообщение о регистрации вам на  почту";
    const errorMessage = "Ошибка! Вы уже зарегистрированы за этот урок";

    if (!studentFromDb) {
      const user = await new StudentModel({
        ...props,
        lessons: [lesson],
      });
      await user.save();
      lessonFromDb.students.push(user.id);
      await lessonFromDb.save();
      return {
        message: successMessage,
      };
    }
    const existLesson = studentFromDb.lessons.some((item) => item.toString() === lesson);

    if (existLesson) {
      throw new Error(errorMessage);
    }

    studentFromDb.lessons.push(lesson as unknown as Schema.Types.ObjectId);
    await studentFromDb.save();

    return {
      message: successMessage,
    };
  }

  async delete(id: string) {
    await StudentModel.findOneAndDelete({ _id: id });
    return {
      message: "Review has deleted",
    };
  }

  async getAll() {
    const posts = await StudentModel.find()
      .populate({
        path: "lessons",
        select: "_id heading type_group type_lesson time_start time_end date_start_event days max_people",
      })
      .exec();
    return posts;
  }
}

export default StudentService;
