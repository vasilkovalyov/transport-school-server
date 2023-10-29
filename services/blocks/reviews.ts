import { IBlockService } from "./block";
import { BlockReviewsModel, BlockReviewsType } from "../../models";
import { ReuseBlockReviewModel } from "../../models/reuse-blocks";

class BlockReviews implements IBlockService<BlockReviewsType> {
  async create(data: BlockReviewsType) {
    const post = await new BlockReviewsModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block reviews course has created",
    };
  }

  async update(data: BlockReviewsType) {
    await BlockReviewsModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
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
    const faqReuseBlock = await ReuseBlockReviewModel.findOne();
    if (!faqReuseBlock) {
      return null;
    }

    const post = await BlockReviewsModel.findOne({ block_page: page });
    if (!post) return false;

    return post;
  }
}

export default BlockReviews;
