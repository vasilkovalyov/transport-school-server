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
}

export default ReuseBlockAchivments;
