import { IBlockService } from "./block";
import { BlockStructEducationModel, BlockStructEducationType } from "../../models";

class BlockStructEducation implements IBlockService<BlockStructEducationType> {
  async create(data: BlockStructEducationType) {
    const post = await new BlockStructEducationModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block struct education course has created",
    };
  }

  async update(data: BlockStructEducationType) {
    await BlockStructEducationModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block struct education course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockStructEducationModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockStructEducationModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockStructEducationModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockStructEducation;
