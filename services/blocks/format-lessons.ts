import { IBlockService } from "./block";
import { BlockFormatLessonsModel, BlockFormatLessonsType } from "../../models";

class BlockFormatLessons implements IBlockService<BlockFormatLessonsType> {
  async create(data: BlockFormatLessonsType) {
    const post = await new BlockFormatLessonsModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block format lessons course has created",
    };
  }

  async update(data: BlockFormatLessonsType) {
    await BlockFormatLessonsModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block format lessons course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockFormatLessonsModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockFormatLessonsModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockFormatLessonsModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockFormatLessons;
