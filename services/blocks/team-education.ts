import { IBlockService } from "./block";
import { BlockTeamEducationModel, IBlockTeamEducation } from "../../models";

class BlockTeamEducation implements IBlockService<IBlockTeamEducation> {
  async create(data: IBlockTeamEducation) {
    const post = await new BlockTeamEducationModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block team education course has created",
    };
  }

  async update(data: IBlockTeamEducation) {
    await BlockTeamEducationModel.findOneAndUpdate({ block_page: data.block_page }, data, { new: true });
    return {
      message: "Block team education course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockTeamEducationModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockTeamEducationModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockTeamEducationModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockTeamEducation;
