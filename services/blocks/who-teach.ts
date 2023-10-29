import { IBlockService } from "./block";
import { BlockWhoTeachModel, BlockWhoTeachType } from "../../models";
import { uploadImage } from "../file-uploader";

class BlockWhoTeach implements IBlockService<BlockWhoTeachType> {
  async create(data: BlockWhoTeachType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const post = await new BlockWhoTeachModel({
      ...data,
      image,
    });
    await post.save();

    return {
      _id: post._id,
      message: "Block who teach course has created",
    };
  }

  async update(data: BlockWhoTeachType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await BlockWhoTeachModel.findOneAndUpdate(
      { block_page: data.block_page },
      {
        ...data,
        image,
      },
      { new: true },
    );
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
