import { ReuseBlockCtaModel, IReuseBlockCta } from "../../models/reuse-blocks";

class ReuseBlockCta {
  async update(data: IReuseBlockCta) {
    const post = await ReuseBlockCtaModel.findOne();

    if (!post) {
      const contacts = await new ReuseBlockCtaModel(data);
      await contacts.save();
      return {
        message: "Cta has saved",
      };
    }

    post.heading = data.heading;
    post.use_link_to_contact_page = data.use_link_to_contact_page;
    post.use_phone_cta = data.use_phone_cta;

    await post.save();

    return {
      message: "Cta has saved",
    };
  }

  async getBlock(page: string) {
    const post = await ReuseBlockCtaModel.findOne({ block_page: page });
    return post;
  }
}

export default ReuseBlockCta;
