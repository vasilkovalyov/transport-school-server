import { BlockScheduleModel } from "../../models";
import LessonService from "../lesson";

class ReuseBlockBlog {
  async getBlockForPublic(page: string, pageNumber: number = 1) {
    const blockScheduleLesson = await BlockScheduleModel.findOne({ block_page: page, publish: true });
    const lessonService = new LessonService();
    let blockData: unknown = null;

    if (blockScheduleLesson) {
      const responsePosts = await lessonService.getUpcomingLessons(blockScheduleLesson.post_number || 3, pageNumber);

      blockData = {
        _id: blockScheduleLesson._id,
        post_number: blockScheduleLesson.post_number,
        block_name: blockScheduleLesson.block_name,
        block_order: blockScheduleLesson.block_order,
        block_page: blockScheduleLesson.block_page,
        heading: blockScheduleLesson.heading,
        publish: blockScheduleLesson.publish,
        posts: responsePosts.posts,
        next_page: responsePosts.next_page,
      };
      return blockData;
    }

    return null;
  }
}

export default ReuseBlockBlog;
