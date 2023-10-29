import { CommonContactsModel } from "../models";
import { ContactsType, SocialNetworksType } from "../models/common-contacts";

class CommonContactsService {
  async updateContacts(data: ContactsType) {
    const post = await CommonContactsModel.findOne();

    if (!post) {
      const contacts = await new CommonContactsModel(data);
      await contacts.save();
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

  async updateSocial(data: SocialNetworksType) {
    const post = await CommonContactsModel.findOne();

    if (!post) {
      const contacts = await new CommonContactsModel(data);
      await contacts.save();
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
    const contacts = await CommonContactsModel.findOne().select("address email phone");
    return contacts;
  }

  async getSocials() {
    const contacts = await CommonContactsModel.findOne().select("social_list");
    return contacts;
  }

  async getFullContacts() {
    const contacts = await CommonContactsModel.findOne();
    return contacts;
  }
}

export default CommonContactsService;
