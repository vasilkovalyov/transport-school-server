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
}

export default ReuseBlockFaq;
