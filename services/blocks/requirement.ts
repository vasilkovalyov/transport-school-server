import { IBlockService } from "./block";
import { BlockRequirementModel, BlockRequirementType } from "../../models";
import { RequirementItem } from "../../models/blocks/requirement";
import { uploadImage } from "../file-uploader";

class BlockRequirement implements IBlockService<BlockRequirementType> {
  async uploadImageAndGetRequirementsList(requirementsList: RequirementItem[]): Promise<RequirementItem[]> {
    let array: RequirementItem[] = [];

    for (const item of requirementsList) {
      let image = "";

      if (item.image) {
        console.log(item.image);
        const response = await uploadImage(item.image);
        console.log(response);
        image = response.secure_url;
      }

      array.push({
        ...item,
        image,
      });
    }

    return array;
  }

  async create(data: BlockRequirementType) {
    const requirementsList: RequirementItem[] = await this.uploadImageAndGetRequirementsList(data.requirements_list);

    const post = await new BlockRequirementModel({
      ...data,
      requirements_list: requirementsList,
    });
    await post.save();

    return {
      _id: post._id,
      message: "Block requirement course has created",
    };
  }

  async update(data: BlockRequirementType) {
    const requirementsList: RequirementItem[] = await this.uploadImageAndGetRequirementsList(data.requirements_list);

    await BlockRequirementModel.findOneAndUpdate(
      { block_page: data.block_page },
      {
        ...data,
        requirements_list: requirementsList,
      },
      { new: true },
    );
    return {
      message: "Block requirement course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockRequirementModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockRequirementModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockRequirementModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockRequirement;
