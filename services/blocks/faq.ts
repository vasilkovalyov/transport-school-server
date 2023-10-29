import { IBlockService } from "./block";
import { BlockFaqModel, BlockFaqType } from "../../models";
import { ReuseBlockFaqModel } from "../../models/reuse-blocks";
import { uploadImage } from "../file-uploader";

class BlockFaq implements IBlockService<BlockFaqType> {
  async create(data: BlockFaqType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const post = await new BlockFaqModel({
      ...data,
      image,
    });
    await post.save();

    return {
      _id: post._id,
      message: "Block faq course has created",
    };
  }

  async update(data: BlockFaqType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await BlockFaqModel.findOneAndUpdate(
      { _id: data._id },
      {
        ...data,
        image,
      },
      { new: true },
    );
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
