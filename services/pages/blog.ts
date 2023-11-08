import { BlockHeroModel } from "../../models";
import { ReuseBlockCtaService, ReuseBlockBlogService } from "../reuse-blocks";

import { PageType } from "./type";

class PageBlogService {
  async getPage(): Promise<PageType> {
    const page = "blog";
    const params = { block_page: page, publish: true };
    const reuseBlockCtaService = new ReuseBlockCtaService();
    const reuseBlockBlogService = new ReuseBlockBlogService();

    const blockHero = await BlockHeroModel.findOne(params);

    const blockBlogData = await reuseBlockBlogService.getBlockForPublic(page);
    const blockCtaData = await reuseBlockCtaService.getBlockForPublic(page);

    const blocks = [blockHero, blockBlogData, blockCtaData].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageBlogService;
