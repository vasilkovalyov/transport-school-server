import { BlockHeroModel, BlockAboutModel } from "../../models";

import {
  getBlockFaqPublicData,
  getBlockAchivmentsPublicData,
  getBlockContactsPublicData,
  getBlockReviewsPublicData,
  getBlockBlogPublicData,
} from "../public/reuse-blocks";

import { PageType } from "./type";

class PageCompanyService {
  async getPage(): Promise<PageType> {
    const page = "company";
    const params = { block_page: page, publish: true };

    const blockHero = await BlockHeroModel.findOne(params);
    const blockAbout = await BlockAboutModel.findOne(params);

    const blockAchivmentsData = await getBlockAchivmentsPublicData(page);
    const blockContactsData = await getBlockContactsPublicData(page);
    const blockReviewData = await getBlockReviewsPublicData(page);
    const blockFaqData = await getBlockFaqPublicData(page);
    const blockBlogData = await getBlockBlogPublicData(page);

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
