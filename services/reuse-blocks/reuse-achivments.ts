import { BlockAchivmentsModel } from "../../models";
import { ReuseBlockAchivmentModel, ReuseBlockAchivmentsType } from "../../models/reuse-blocks";

class ReuseBlockAchivments {
  async update(data: ReuseBlockAchivmentsType) {
    const post = await ReuseBlockAchivmentModel.findOne();

    if (!post) {
      const contacts = await new ReuseBlockAchivmentModel(data);
      await contacts.save();
      return {
        message: "Achivments has saved",
      };
    }

    post.heading = data.heading;
    post.subheading = data.subheading;
    post.list_achivments = data.list_achivments;
    await post.save();

    return {
      message: "Achivments has saved",
    };
  }

  async getBlock(page: string) {
    const post = await ReuseBlockAchivmentModel.findOne({ block_page: page });
    return post;
  }

  async getBlockForPublic(page: string) {
    const block = await BlockAchivmentsModel.findOne({ block_page: page, publish: true }).select(
      "_id block_name block_order block_page publish",
    );

    let blockData: unknown = null;

    if (block) {
      const reuseBlock = await ReuseBlockAchivmentModel.findOne().select("heading subheading list_achivments");

      blockData = {
        _id: block?._id,
        block_name: block?.block_name,
        block_order: block?.block_order,
        block_page: block?.block_page,
        publish: block?.publish,
        heading: reuseBlock?.heading,
        subheading: reuseBlock?.subheading,
        list_achivments: reuseBlock?.list_achivments,
      };

      return blockData;
    }

    return null;
  }
}

export default ReuseBlockAchivments;
