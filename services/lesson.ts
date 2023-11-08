import { LessonType, LessonModel, StudentModel } from "../models";
import { getPaginationInfo } from "../utils/pagination";

type LessonCreateType = Omit<LessonType, "date_start_event"> & {
  date_start_event: string;
};

class LessonService {
  async create(data: LessonCreateType) {
    const [year, month, day] = data.date_start_event.split("-");
    const [hour, minutes] = data.time_start.split(":");

    const dateStartEvent = new Date(+year, +month - 1, +day, +hour, +minutes, 0);
    const lesson_schedule = await new LessonModel({
      ...data,
      date_start_event: dateStartEvent,
      students: [],
    });
    await lesson_schedule.save();

    return {
      _id: lesson_schedule._id,
      message: "Lesson schedule has created",
    };
  }

  async update(data: LessonType) {
    await LessonModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Lesson schedule has updated",
    };
  }

  async delete(id: string) {
    const lesson = await LessonModel.deleteOne({
      _id: id,
    });
    if (!lesson.deletedCount) {
      throw new Error("Lesson schedule already delete");
    }

    return {
      message: "Lesson schedule has deleted",
    };
  }

  async getLesson(id: string) {
    const lesson_schedules = await LessonModel.findOne({ _id: id });
    return lesson_schedules;
  }

  async getAllStudentsFromLesson(id: string) {
    const lessonStudents = await LessonModel.findById(id).select("students");
    const students = await StudentModel.find({
      _id: { $in: lessonStudents?.students },
    });
    return students;
  }

  async deleteStudentFromLesson(lessonId: string, studentId: string) {
    await LessonModel.findOneAndUpdate({ _id: lessonId }, { $pull: { students: studentId } }, { new: true });

    return true;
  }

  async getUpcomingLessons(size: number, page: number) {
    const total_count = await LessonModel.countDocuments();
    const { nextPage, total_pages, skip_size } = getPaginationInfo(size, page, total_count);
    const currentDate = new Date();
    const lessons = await LessonModel.aggregate([
      {
        $match: {
          date_start_event: { $gte: currentDate },
        },
      },
      {
        $project: {
          heading: 1,
          type_group: 1,
          type_lesson: 1,
          days: 1,
          time_start: 1,
          time_end: 1,
          date_start_event: 1,
          max_people: 1,
          students: {
            $cond: {
              if: { $isArray: "$students" },
              then: { $size: "$students" },
              else: 0,
            },
          },
        },
      },
      {
        $sort: { date_start_event: 1 },
      },
    ])
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

  async getLessonsPaginated(size: number, page: number) {
    const total_count = await LessonModel.countDocuments();
    const { nextPage, total_pages, skip_size } = getPaginationInfo(size, page, total_count);
    const lessons = await LessonModel.aggregate([
      {
        $project: {
          heading: 1,
          type_group: 1,
          type_lesson: 1,
          days: 1,
          time_start: 1,
          time_end: 1,
          date_start_event: 1,
          max_people: 1,
          students: {
            $cond: {
              if: { $isArray: "$students" },
              then: { $size: "$students" },
              else: 0,
            },
          },
        },
      },
      {
        $sort: { date_start_event: 1 },
      },
    ])
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

  async getLessonsForCtaForm() {
    const currentDate = new Date();
    const lessons = await LessonModel.aggregate([
      {
        $match: {
          date_start_event: { $gte: currentDate },
        },
      },
      {
        $project: {
          heading: 1,
          time_start: 1,
          time_end: 1,
          date_start_event: 1,
          type_group: 1,
          type_lesson: 1,
          days: 1,
          max_people: 1,
          students: {
            $cond: {
              if: { $isArray: "$students" },
              then: { $size: "$students" },
              else: 0,
            },
          },
        },
      },
      {
        $sort: { date_start_event: 1 },
      },
    ]);

    return {
      lessons: lessons,
    };
  }
}

export default LessonService;
