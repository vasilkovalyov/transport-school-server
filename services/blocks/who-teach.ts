import { IBlockService } from "./block";
import { BlockWhoTeachModel, IBlockWhoTeach } from "../../models";

class BlockWhoTeach implements IBlockService<IBlockWhoTeach> {
  async create(data: IBlockWhoTeach) {
    const post = await new BlockWhoTeachModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block who teach course has created",
    };
  }

  async update(data: IBlockWhoTeach) {
    await BlockWhoTeachModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Block who teach course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockWhoTeachModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockWhoTeachModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockWhoTeachModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockWhoTeach;
