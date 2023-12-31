import { IBlockService } from "./block";
import { BlockScheduleModel, BlockScheduleType } from "../../models";

class BlockSchedule implements IBlockService<BlockScheduleType> {
  async create(data: BlockScheduleType) {
    const post = await new BlockScheduleModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block schedule course has created",
    };
  }

  async update(data: BlockScheduleType) {
    await BlockScheduleModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
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
