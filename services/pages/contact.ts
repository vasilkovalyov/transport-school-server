import { BlockContactFormModel } from "../../models";
import { getBlockContactsPublicData, getBlockCtaPublicData } from "../public/reuse-blocks";

import { IPage } from "./type";

class PageContactService {
  async getPage(): Promise<IPage> {
    const page = "contact";
    const params = { block_page: page, publish: true };
    const blockContactForm = await BlockContactFormModel.findOne(params);

    const blockContactsData = await getBlockContactsPublicData(page);
    const blockCtaData = await getBlockCtaPublicData(page);

    const blocks = [blockContactForm, blockContactsData, blockCtaData].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageContactService;
