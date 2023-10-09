import { CommonContactsModel } from "../models";
import { IContacts, ISocialNetworks } from "../models/common-contacts";

class CommonContactsService {
  async updateContacts(data: IContacts) {
    const post = await CommonContactsModel.findOne();

    if (!post) {
      const lesson_schedule = await new CommonContactsModel(data);
      await lesson_schedule.save();
      return {
        message: "Contacts has saved",
      };
    }

    post.email = data.email;
    post.address = data.address;
    post.phone = data.phone;
    await post.save();

    return {
      message: "Contacts has saved",
    };
  }

  async updateSocial(data: ISocialNetworks) {
    const post = await CommonContactsModel.findOne();

    if (!post) {
      const lesson_schedule = await new CommonContactsModel(data);
      await lesson_schedule.save();
      return {
        message: "Social has saved",
      };
    }

    post.social_list = data.social_list;
    await post.save();

    return {
      message: "Social has saved",
    };
  }

  async getContacts() {
    const contacts = await CommonContactsModel.findOne();

    return contacts;
  }
}

export default CommonContactsService;
