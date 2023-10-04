import { IBlockService } from "./block";
import { BlockCourseForPeopleModel, IBlockCourseForPeople } from "../../models";

class BlockCourseForPeople implements IBlockService<IBlockCourseForPeople> {
  async create(data: IBlockCourseForPeople) {
    const post = await new BlockCourseForPeopleModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block contacts course has created",
    };
  }

  async update(data: IBlockCourseForPeople) {
    await BlockCourseForPeopleModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
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
