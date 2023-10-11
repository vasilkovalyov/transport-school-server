import { IBlockService } from "./block";
import { BlockCtaModel, IBlockCta } from "../../models";
import { ReuseBlockCtaModel } from "../../models/reuse-blocks";

class BlockCta implements IBlockService<IBlockCta> {
  async create(data: IBlockCta) {
    const post = await new BlockCtaModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block cta course has created",
    };
  }

  async update(data: IBlockCta) {
    await BlockCtaModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Block cta course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockCtaModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockCtaModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const ctaReuseBlock = await ReuseBlockCtaModel.findOne();
    if (!ctaReuseBlock) {
      return null;
    }

    const post = await BlockCtaModel.findOne({ block_page: page });
    if (!post) return false;

    return post;
  }
}

export default BlockCta;
