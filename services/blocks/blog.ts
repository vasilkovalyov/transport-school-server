import { IBlockService } from "./block";
import { BlockBlogModel, BlockBlogType } from "../../models";

class BlockBlog implements IBlockService<BlockBlogType> {
  async create(data: BlockBlogType) {
    const post = await new BlockBlogModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block blog course has created",
    };
  }

  async update(data: BlockBlogType) {
    await BlockBlogModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block blog course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockBlogModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockBlogModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockBlogModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockBlog;
