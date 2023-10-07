import { IBlockService } from "./block";
import { BlockServicesModel, IBlockServices } from "../../models";

class BlockServices implements IBlockService<IBlockServices> {
  async create(data: IBlockServices) {
    const post = await new BlockServicesModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block services course has created",
    };
  }

  async update(data: IBlockServices) {
    await BlockServicesModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block services course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockServicesModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockServicesModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockServicesModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockServices;
