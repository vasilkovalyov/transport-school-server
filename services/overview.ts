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

  async getUpcommingEvents() {
    // const lessons = await LessonScheduleModel.find()
    //   .limit(4)
    //   .select("_id date_start_event time_start time_end heading max_people students");

    // return {
    //   lessons: lessons,
    // };
    const lessons = await LessonScheduleModel.aggregate([
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
