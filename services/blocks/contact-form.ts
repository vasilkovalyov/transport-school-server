import { IBlockService } from "./block";
import { BlockContactFormModel, BlockContactFormType } from "../../models";
import { uploadImage } from "../file-uploader";

class BlockContactForm implements IBlockService<BlockContactFormType> {
  async create(data: BlockContactFormType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const post = await new BlockContactFormModel({
      ...data,
      image,
    });
    await post.save();

    return {
      _id: post._id,
      message: "Block contact form course has created",
    };
  }

  async update(data: BlockContactFormType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await BlockContactFormModel.findOneAndUpdate(
      { block_page: data.block_page },
      {
        ...data,
        image,
      },
      { new: true },
    );
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
