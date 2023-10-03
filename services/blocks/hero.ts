import { BlockHeroModel, IBlockHero } from "../../models";

class BlockHero {
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

  async getBlock(page: string) {
    const post = await BlockHeroModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockHero;
