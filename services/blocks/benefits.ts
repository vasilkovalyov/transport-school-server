import { IBlockService } from "./block";
import { BlockBenefitsModel, BlockBenefitsType } from "../../models";
import { uploadImage } from "../file-uploader";

class BlockBenefits implements IBlockService<BlockBenefitsType> {
  async create(data: BlockBenefitsType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const post = await new BlockBenefitsModel({
      ...data,
      image,
    });
    await post.save();

    return {
      _id: post._id,
      message: "Block benefits course has created",
    };
  }

  async update(data: BlockBenefitsType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await BlockBenefitsModel.findOneAndUpdate(
      { block_page: data.block_page },
      {
        ...data,
        image,
      },
      { new: true },
    );
    return {
      message: "Block benefits course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockBenefitsModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockBenefitsModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockBenefitsModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockBenefits;
