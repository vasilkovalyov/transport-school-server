import { BlockHeroModel, BlockAboutModel } from "../../models";

import {
  ReuseBlockAchivmentsService,
  ReuseBlockFaqService,
  ReuseBlockContactsService,
  ReuseBlockReviewService,
  ReuseBlockBlogService,
} from "../reuse-blocks";

import { PageType } from "./type";

class PageCompanyService {
  async getPage(): Promise<PageType> {
    const page = "company";
    const params = { block_page: page, publish: true };

    const reuseBlockAchivmentsService = new ReuseBlockAchivmentsService();
    const reuseBlockFaqServiceService = new ReuseBlockFaqService();
    const reuseBlockContactsServiceService = new ReuseBlockContactsService();
    const reuseBlockReviewServiceService = new ReuseBlockReviewService();
    const reuseBlockBlogService = new ReuseBlockBlogService();

    const blockHero = await BlockHeroModel.findOne(params);
    const blockAbout = await BlockAboutModel.findOne(params);

    const blockAchivmentsData = await reuseBlockAchivmentsService.getBlockForPublic(page);
    const blockContactsData = await reuseBlockContactsServiceService.getBlockForPublic(page);
    const blockReviewData = await reuseBlockReviewServiceService.getBlockForPublic(page);
    const blockFaqData = await reuseBlockFaqServiceService.getBlockForPublic(page);
    const blockBlogData = await reuseBlockBlogService.getBlockForPublic(page);

    const blocks = [
      blockHero,
      blockAbout,
      blockReviewData,
      blockAchivmentsData,
      blockContactsData,
      blockFaqData,
      blockBlogData,
    ].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageCompanyService;
