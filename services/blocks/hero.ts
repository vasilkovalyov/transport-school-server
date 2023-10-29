import { IBlockService } from "./block";
import { BlockHeroModel, BlockHeroType } from "../../models";
import { uploadImage } from "../../services/file-uploader";

class BlockHero implements IBlockService<BlockHeroType> {
  async create(data: BlockHeroType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const post = await new BlockHeroModel({
      ...data,
      image,
    });
    await post.save();

    return {
      _id: post._id,
      message: "Block hero has created",
    };
  }

  async update(data: BlockHeroType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await BlockHeroModel.findOneAndUpdate(
      { block_page: data.block_page },
      {
        ...data,
        image,
      },
      { new: true },
    );
    return {
      message: "Block hero has updated",
    };
  }

  async publish(pageName: string) {
    await BlockHeroModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockHeroModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockHeroModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockHero;
