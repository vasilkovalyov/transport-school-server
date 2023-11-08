import { BlockReviewsModel } from "../../models";
import { ReviewModel } from "../../models";
import { ReuseBlockReviewModel, ReuseBlockReviewType } from "../../models/reuse-blocks";

class ReuseBlockReview {
  async update(data: ReuseBlockReviewType) {
    const post = await ReuseBlockReviewModel.findOne();

    if (!post) {
      const contacts = await new ReuseBlockReviewModel(data);
      await contacts.save();
      return {
        message: "Review has saved",
      };
    }

    await post.save();

    return {
      message: "Review has saved",
    };
  }

  async getBlock(page: string) {
    const post = await ReuseBlockReviewModel.findOne({ block_page: page });
    return post;
  }

  async getBlockForPublic(page: string) {
    const block = await BlockReviewsModel.findOne({ block_page: page, publish: true }).select(
      "_id block_name block_order block_page publish",
    );

    let blockData: unknown = null;

    if (block) {
      const reuseBlock = await ReuseBlockReviewModel.findOne().select("heading");
      const reviews = await ReviewModel.find();

      blockData = {
        _id: block._id,
        block_name: block.block_name,
        block_order: block.block_order,
        block_page: block.block_page,
        publish: block.publish,
        heading: reuseBlock?.heading,
        reviews: reviews,
      };
      return blockData;
    }

    return null;
  }
}

export default ReuseBlockReview;
