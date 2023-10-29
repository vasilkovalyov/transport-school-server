import { IBlockService } from "./block";
import { BlockAboutCourseModel, BlockAboutCourseType } from "../../models";
import { uploadImage } from "../file-uploader";

class BlockAboutCourse implements IBlockService<BlockAboutCourseType> {
  async create(data: BlockAboutCourseType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const post = await new BlockAboutCourseModel({
      ...data,
      image,
    });
    await post.save();

    return {
      _id: post._id,
      message: "Block about course has created",
    };
  }

  async update(data: BlockAboutCourseType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await BlockAboutCourseModel.findOneAndUpdate(
      { block_page: data.block_page },
      {
        ...data,
        image,
      },
      { new: true },
    );
    return {
      message: "Block about course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockAboutCourseModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockAboutCourseModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const post = await BlockAboutCourseModel.findOne({ block_page: page });
    return post;
  }
}

export default BlockAboutCourse;
