import { BlockContactsModel } from "../../models";
import { ReuseBlockContactsModel, ReuseBlockContactsType } from "../../models/reuse-blocks";
import { uploadImage } from "../file-uploader";

class ReuseBlockContacts {
  async update(data: ReuseBlockContactsType) {
    const post = await ReuseBlockContactsModel.findOne();

    if (!post) {
      let image = "";

      if (data.image) {
        const response = await uploadImage(data.image);
        image = response.secure_url;
      }

      const contacts = await new ReuseBlockContactsModel({
        ...data,
        image,
      });
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
    post.image = data.image;

    await post.save();

    return {
      message: "Contacts has saved",
    };
  }

  async getBlock(page: string) {
    const post = await ReuseBlockContactsModel.findOne({ block_page: page });
    return post;
  }

  async getBlockForPublic(page: string) {
    const block = await BlockContactsModel.findOne({ block_page: page, publish: true }).select(
      "_id block_name block_order block_page publish",
    );

    let blockData: unknown = null;

    if (block) {
      const reuseBlock = await ReuseBlockContactsModel.findOne().select("heading address phone email map_url");

      blockData = {
        _id: block?._id,
        block_name: block?.block_name,
        block_order: block?.block_order,
        block_page: block?.block_page,
        publish: block?.publish,
        heading: reuseBlock?.heading,
        address: reuseBlock?.address,
        phone: reuseBlock?.phone,
        email: reuseBlock?.email,
        map_url: reuseBlock?.map_url,
      };
      return blockData;
    }

    return null;
  }
}

export default ReuseBlockContacts;
