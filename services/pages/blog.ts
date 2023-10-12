import { BlockHeroModel } from "../../models";
import { getBlockCtaPublicData, getBlockBlogPublicData } from "../public/reuse-blocks";

import { IPage } from "./type";

class PageBlogService {
  async getPage(): Promise<IPage> {
    const page = "blog";
    const params = { block_page: page, publish: true };
    const blockHero = await BlockHeroModel.findOne(params);

    const blockBlogData = await getBlockBlogPublicData(page);
    const blockCtaData = await getBlockCtaPublicData(page);

    return {
      body: [blockHero, blockBlogData, blockCtaData],
    };
  }
}

export default PageBlogService;
