import { IBlockService } from "./block";
import { BlockCourseForPeopleModel, BlockCourseForPeopleType } from "../../models";

class BlockCourseForPeople implements IBlockService<BlockCourseForPeopleType> {
  async create(data: BlockCourseForPeopleType) {
    const post = await new BlockCourseForPeopleModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block contacts course has created",
    };
  }

  async update(data: BlockCourseForPeopleType) {
    await BlockCourseForPeopleModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block contacts course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockCourseForPeopleModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockCourseForPeopleModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockCourseForPeopleModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockCourseForPeople;
