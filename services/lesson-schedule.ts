import { LessonScheduleType, LessonScheduleModel } from "../models";
import { getPaginationInfo } from "../utils/pagination";

class LessonScheduleService {
  async create(data: LessonScheduleType) {
    const lesson_schedule = await new LessonScheduleModel(data);
    await lesson_schedule.save();

    return {
      _id: lesson_schedule._id,
      message: "Lesson schedule has created",
    };
  }

  async update(data: LessonScheduleType) {
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
    const lessonSchedules = await LessonScheduleModel.find({}, null, { sort: { date_start_event: 1 } });

    return lessonSchedules;
  }

  async getLessonSchedule(id: string) {
    const lesson_schedules = await LessonScheduleModel.findOne({ _id: id });
    return lesson_schedules;
  }

  async getPaginatedPosts(size: number, page: number) {
    const total_count = await LessonScheduleModel.countDocuments();
    const { nextPage, total_pages, skip_size } = getPaginationInfo(size, page, total_count);
    const lessons = await LessonScheduleModel.find({}, null, { sort: { date_start_event: 1 } })
      .skip(skip_size)
      .limit(size)
      .exec();

    return {
      total_count,
      current_page: page,
      next_page: nextPage,
      total_pages: total_pages,
      posts: lessons,
    };
  }
}

export default LessonScheduleService;
