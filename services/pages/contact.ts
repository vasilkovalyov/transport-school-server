import { BlockContactFormModel } from "../../models";

import { ReuseBlockCtaService, ReuseBlockContactsService } from "../reuse-blocks";

import { PageType } from "./type";

class PageContactService {
  async getPage(): Promise<PageType> {
    const page = "contact";
    const params = { block_page: page, publish: true };
    const reuseBlockCtaService = new ReuseBlockCtaService();
    const reuseBlockContactsService = new ReuseBlockContactsService();

    const blockContactForm = await BlockContactFormModel.findOne(params);

    const blockContactsData = await reuseBlockContactsService.getBlockForPublic(page);
    const blockCtaData = await reuseBlockCtaService.getBlockForPublic(page);

    const blocks = [blockContactForm, blockContactsData, blockCtaData].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageContactService;
