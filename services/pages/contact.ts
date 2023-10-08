import { IBlockContactForm, BlockContactFormModel } from "../../models";
import { IPage } from "./type";

class PageContactService {
  async getPage(): Promise<IPage> {
    const page = "contact";
    const blockContactForm = await BlockContactFormModel.findOne({ block_page: page, publish: true });

    return {
      body: [blockContactForm as IBlockContactForm],
    };
  }
}

export default PageContactService;
