import { IBlockService } from "./block";
import { BlockContactFormModel, BlockContactFormType } from "../../models";

class BlockContactForm implements IBlockService<BlockContactFormType> {
  async create(data: BlockContactFormType) {
    const post = await new BlockContactFormModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block contact form course has created",
    };
  }

  async update(data: BlockContactFormType) {
    await BlockContactFormModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block contact form course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockContactFormModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockContactFormModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockContactFormModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockContactForm;
