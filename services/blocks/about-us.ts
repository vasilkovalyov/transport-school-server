import { IBlockService } from "./block";
import { BlockAboutUsModel, IBlockAboutUs } from "../../models";

class BlockAboutUs implements IBlockService<IBlockAboutUs> {
  async create(data: IBlockAboutUs) {
    const post = await new BlockAboutUsModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block about us course has created",
    };
  }

  async update(data: IBlockAboutUs) {
    await BlockAboutUsModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Block about us course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockAboutUsModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockAboutUsModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockAboutUsModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockAboutUs;
