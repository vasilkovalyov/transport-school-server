import { IBlockService } from "./block";
import { BlockAboutModel, IBlockAbout } from "../../models";

class BlockAbout implements IBlockService<IBlockAbout> {
  async create(data: IBlockAbout) {
    const post = await new BlockAboutModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block about course has created",
    };
  }

  async update(data: IBlockAbout) {
    await BlockAboutModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block about course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockAboutModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockAboutModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockAboutModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockAbout;
