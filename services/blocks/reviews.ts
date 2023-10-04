import { IBlockService } from "./block";
import { BlockReviewsModel, IBlockReviews } from "../../models";

class BlockReviews implements IBlockService<IBlockReviews> {
  async create(data: IBlockReviews) {
    const post = await new BlockReviewsModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block reviews course has created",
    };
  }

  async update(data: IBlockReviews) {
    await BlockReviewsModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Block reviews course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockReviewsModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockReviewsModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockReviewsModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockReviews;
