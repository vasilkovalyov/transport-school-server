import { BlockCtaModel, CommonContactsModel } from "../../models";
import { ReuseBlockCtaModel, ReuseBlockCtaType } from "../../models/reuse-blocks";

class ReuseBlockCta {
  async update(data: ReuseBlockCtaType) {
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

  async getBlockForPublic(page: string) {
    const block = await BlockCtaModel.findOne({ block_page: page, publish: true }).select(
      "_id block_name block_order block_page publish",
    );

    const contactsData = await CommonContactsModel.findOne();

    let blockData: unknown = null;

    if (block) {
      const reuseBlock = await ReuseBlockCtaModel.findOne().select("heading use_link_to_contact_page use_phone_cta");

      blockData = {
        _id: block?._id,
        block_name: block?.block_name,
        block_order: block?.block_order,
        block_page: block?.block_page,
        publish: block?.publish,
        heading: reuseBlock?.heading,
        use_link_to_contact_page: reuseBlock?.use_link_to_contact_page,
        use_phone_cta: reuseBlock?.use_phone_cta,
        phone: contactsData?.phone,
      };

      return blockData;
    }

    return null;
  }
}

export default ReuseBlockCta;
