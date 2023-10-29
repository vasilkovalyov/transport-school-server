import { IBlockService } from "./block";
import { BlockAboutUsModel, BlockAboutUsType } from "../../models";
import { uploadImage } from "../file-uploader";

class BlockAboutUs implements IBlockService<BlockAboutUsType> {
  async create(data: BlockAboutUsType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const post = await new BlockAboutUsModel({
      ...data,
      image,
    });

    await post.save();

    return {
      _id: post._id,
      message: "Block about us course has created",
    };
  }

  async update(data: BlockAboutUsType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await BlockAboutUsModel.findOneAndUpdate(
      { block_page: data.block_page },
      {
        ...data,
        image,
      },
      { new: true },
    );
    return {
      message: "Block about us course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockAboutUsModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockAboutUsModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockAboutUsModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockAboutUs;
