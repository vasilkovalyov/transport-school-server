import { ReuseBlockContactsModel, ReuseBlockContactsType } from "../../models/reuse-blocks";

class ReuseBlockContacts {
  async update(data: ReuseBlockContactsType) {
    const post = await ReuseBlockContactsModel.findOne();

    if (!post) {
      const contacts = await new ReuseBlockContactsModel(data);
      await contacts.save();
      return {
        message: "Contacts has saved",
      };
    }

    post.heading = data.heading;
    post.address = data.address;
    post.phone = data.phone;
    post.email = data.email;
    post.map_url = data.map_url;

    await post.save();

    return {
      message: "Contacts has saved",
    };
  }

  async getBlock(page: string) {
    const post = await ReuseBlockContactsModel.findOne({ block_page: page });
    return post;
  }
}

export default ReuseBlockContacts;
