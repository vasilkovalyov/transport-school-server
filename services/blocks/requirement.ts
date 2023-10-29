import { IBlockService } from "./block";
import { BlockRequirementModel, BlockRequirementType } from "../../models";

class BlockRequirement implements IBlockService<BlockRequirementType> {
  async create(data: BlockRequirementType) {
    const post = await new BlockRequirementModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block requirement course has created",
    };
  }

  async update(data: BlockRequirementType) {
    await BlockRequirementModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block requirement course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockRequirementModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockRequirementModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockRequirementModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockRequirement;
