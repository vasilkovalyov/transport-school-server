import { IBlockService } from "./block";
import { BlockContactsModel, IBlockContacts } from "../../models";
import { ReuseBlockContactsModel } from "../../models/reuse-blocks";

class BlockContacts implements IBlockService<IBlockContacts> {
  async create(data: IBlockContacts) {
    const post = await new BlockContactsModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Block contacts course has created",
    };
  }

  async update(data: IBlockContacts) {
    await BlockContactsModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Block contacts course has updated",
    };
  }

  async publish(pageName: string) {
    await BlockContactsModel.findOneAndUpdate({ block_page: pageName }, { publish: true });
    return true;
  }

  async unpublish(pageName: string) {
    await BlockContactsModel.findOneAndUpdate({ block_page: pageName }, { publish: false });
    return true;
  }

  async getBlock(page: string) {
    const contactsReuseBlock = await ReuseBlockContactsModel.findOne();
    if (!contactsReuseBlock) {
      return null;
    }

    const post = await BlockContactsModel.findOne({ block_page: page });
    if (!post) return false;

    return post;
  }
}

export default BlockContacts;
