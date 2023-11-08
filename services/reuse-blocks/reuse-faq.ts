import { BlockFaqModel } from "../../models";
import { ReuseBlockFaqModel, ReuseBlockFaqType } from "../../models/reuse-blocks";
import { uploadImage } from "../file-uploader";

class ReuseBlockFaq {
  async update(data: ReuseBlockFaqType) {
    const post = await ReuseBlockFaqModel.findOne();

    if (!post) {
      let image = "";

      if (data.image) {
        const response = await uploadImage(data.image);
        image = response.secure_url;
      }

      const contacts = await new ReuseBlockFaqModel({
        ...data,
        image,
      });
      await contacts.save();
      return {
        message: "Faq has saved",
      };
    }

    post.heading = data.heading;
    post.list_faq = data.list_faq;
    post.image = data.image;

    await post.save();

    return {
      message: "Faq has saved",
    };
  }

  async getBlock(page: string) {
    const post = await ReuseBlockFaqModel.findOne({ block_page: page });
    return post;
  }

  async getBlockForPublic(page: string) {
    const block = await BlockFaqModel.findOne({ block_page: page, publish: true }).select(
      "_id block_name block_order block_page publish",
    );

    let blockData: unknown = null;

    if (block) {
      const reuseBlock = await ReuseBlockFaqModel.findOne().select("heading list_faq image");

      blockData = {
        _id: block?._id,
        block_name: block?.block_name,
        block_order: block?.block_order,
        block_page: block?.block_page,
        publish: block?.publish,
        heading: reuseBlock?.heading,
        list_faq: reuseBlock?.list_faq,
        image: reuseBlock?.image,
      };
      return blockData;
    }

    return null;
  }
}

export default ReuseBlockFaq;
