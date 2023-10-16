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

    const blocks = [blockHero, blockBlogData, blockCtaData].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageBlogService;
