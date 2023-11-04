import { PostModel, ServiceModel, LessonScheduleModel, StudentModel } from "../models";

class OverviewService {
  async getInfo() {
    const blogsCount = await PostModel.countDocuments();
    const servicesCount = await ServiceModel.countDocuments();
    const lessonsCount = await LessonScheduleModel.countDocuments();
    const studentsCount = await StudentModel.countDocuments();

    return {
      blog: blogsCount,
      services: servicesCount,
      lessons: lessonsCount,
      students: studentsCount,
    };
  }

  async getUpcomingEvents() {
    const currentDate = new Date();

    const lessons = await LessonScheduleModel.aggregate([
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
      .limit(4)
      .exec();

    return {
      lessons: lessons,
    };
  }
}

export default OverviewService;
