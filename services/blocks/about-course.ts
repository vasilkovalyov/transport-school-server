import { IBlockService } from "./block";
import { BlockAboutCourseModel, BlockAboutCourseType } from "../../models";

class BlockAboutCourse implements IBlockService<BlockAboutCourseType> {
  async create(data: BlockAboutCourseType) {
    const post = await new BlockAboutCourseModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block about course has created",
    };
  }

  async update(data: BlockAboutCourseType) {
    await BlockAboutCourseModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block about course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockAboutCourseModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockAboutCourseModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockAboutCourseModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockAboutCourse;
