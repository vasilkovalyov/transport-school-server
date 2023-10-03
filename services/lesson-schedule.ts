import { ILessonSchedule, LessonScheduleModel } from "../models";

class LessonScheduleService {
  async create(data: ILessonSchedule) {
    const lesson_schedule = await new LessonScheduleModel(data);
    await lesson_schedule.save();

    return {
      _id: lesson_schedule._id,
      message: "Lesson schedule has created",
    };
  }

  async update(data: ILessonSchedule) {
    await LessonScheduleModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Lesson schedule has updated",
    };
  }

  async delete(id: string) {
    const lessonSchedule = await LessonScheduleModel.deleteOne({
      _id: id,
    });
    if (!lessonSchedule.deletedCount) {
      throw new Error("Lesson schedule already delete");
    }

    return {
      message: "Lesson schedule has deleted",
    };
  }

  async getLessonSchedules() {
    const lessonSchedules = await LessonScheduleModel.find();

    return {
      lesson_schedules: lessonSchedules,
    };
  }

  async getLessonSchedule(id: string) {
    const lesson_schedules = await LessonScheduleModel.findById(id);
    return lesson_schedules;
  }
}

export default LessonScheduleService;
