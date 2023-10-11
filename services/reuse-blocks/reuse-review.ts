import { ReuseBlockReviewModel, IReuseBlockReview } from "../../models/reuse-blocks";

class ReuseBlockReview {
  async update(data: IReuseBlockReview) {
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
}

export default ReuseBlockReview;
