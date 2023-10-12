import { BlockHeroModel, BlockBlogModel } from "../../models";
import { getBlockCtaPublicData } from "../public/reuse-blocks";

import { IPage } from "./type";

class PageBlogService {
  async getPage(): Promise<IPage> {
    const page = "blog";
    const params = { block_page: page, publish: true };
    const blockHero = await BlockHeroModel.findOne(params);
    const blockBlog = await BlockBlogModel.findOne(params);

    const blockCtaData = await getBlockCtaPublicData(page);

    return {
      body: [blockHero, blockBlog, blockCtaData],
    };
  }
}

export default PageBlogService;
