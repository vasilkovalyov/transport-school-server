import { IBlockService } from "./block";
import { BlockHeroModel, BlockHeroType } from "../../models";

class BlockHero implements IBlockService<BlockHeroType> {
  async create(data: BlockHeroType) {
    const post = await new BlockHeroModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block hero has created",
    };
  }

  async update(data: BlockHeroType) {
    await BlockHeroModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block hero has updated",
    };
  }

  async publish(pageName: string) {
    await BlockHeroModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockHeroModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockHeroModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockHero;
