import { IBlockService } from "./block";
import { BlockAchivmentsModel, IBlockAchivments } from "../../models";
import { ReuseBlockAchivmentModel } from "../../models/reuse-blocks";

class BlockAchivments implements IBlockService<IBlockAchivments> {
  async create(data: IBlockAchivments) {
    const post = await new BlockAchivmentsModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block achivments course has created",
    };
  }

  async update(data: IBlockAchivments) {
    await BlockAchivmentsModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Block achivments course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockAchivmentsModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockAchivmentsModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const achivmentsReuseBlock = await ReuseBlockAchivmentModel.findOne();
    if (!achivmentsReuseBlock) {
      return null;
    }

    const post = await BlockAchivmentsModel.findOne({ block_page: page });
    if (!post) return false;

    return post;
  }
}

export default BlockAchivments;
