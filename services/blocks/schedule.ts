import { IBlockService } from "./block";
import { BlockScheduleModel, IBlockSchedule } from "../../models";

class BlockSchedule implements IBlockService<IBlockSchedule> {
  async create(data: IBlockSchedule) {
    const post = await new BlockScheduleModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block schedule course has created",
    };
  }

  async update(data: IBlockSchedule) {
    await BlockScheduleModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Block schedule course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockScheduleModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockScheduleModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockScheduleModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockSchedule;
