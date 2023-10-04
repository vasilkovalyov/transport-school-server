import Block from "./block";
import { BlockHeroModel, IBlockHero } from "../../models";

class BlockHero extends Block<IBlockHero> {
  async create(data: IBlockHero) {
    const post = await new BlockHeroModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block hero has created",
    };
  }

  async update(data: IBlockHero) {
    await BlockHeroModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
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
