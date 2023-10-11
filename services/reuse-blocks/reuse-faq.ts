import { ReuseBlockFaqModel, IReuseBlockFaq } from "../../models/reuse-blocks";

class ReuseBlockFaq {
  async update(data: IReuseBlockFaq) {
    const post = await ReuseBlockFaqModel.findOne();

    if (!post) {
      const contacts = await new ReuseBlockFaqModel(data);
      await contacts.save();
      return {
        message: "Faq has saved",
      };
    }

    post.heading = data.heading;
    post.list_faq = data.list_faq;
    await post.save();

    return {
      message: "Faq has saved",
    };
  }

  async getBlock(page: string) {
    const post = await ReuseBlockFaqModel.findOne({ block_page: page });
    return post;
  }
}

export default ReuseBlockFaq;
