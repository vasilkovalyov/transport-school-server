import { IBlockService } from "./block";
import { BlockFaqModel, IBlockFaq } from "../../models";
import { ReuseBlockFaqModel } from "../../models/reuse-blocks";

class BlockFaq implements IBlockService<IBlockFaq> {
  async create(data: IBlockFaq) {
    const post = await new BlockFaqModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block faq course has created",
    };
  }

  async update(data: IBlockFaq) {
    await BlockFaqModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Block faq course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockFaqModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockFaqModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const faqReuseBlock = await ReuseBlockFaqModel.findOne();
    if (!faqReuseBlock) {
      return null;
    }

    const post = await BlockFaqModel.findOne({ block_page: page });
    if (!post) return false;

    return post;
  }
}

export default BlockFaq;
