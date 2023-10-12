import { BlockHeroModel, BlockAboutModel } from "../../models";

import {
  getBlockFaqPublicData,
  getBlockAchivmentsPublicData,
  getBlockContactsPublicData,
  getBlockReviewsPublicData,
  getBlockBlogPublicData,
} from "../public/reuse-blocks";

import { IPage } from "./type";

class PageCompanyService {
  async getPage(): Promise<IPage> {
    const page = "company";
    const params = { block_page: page, publish: true };

    const blockHero = await BlockHeroModel.findOne(params);
    const blockAbout = await BlockAboutModel.findOne(params);

    const blockAchivmentsData = await getBlockAchivmentsPublicData(page);
    const blockContactsData = await getBlockContactsPublicData(page);
    const blockReviewData = await getBlockReviewsPublicData(page);
    const blockFaqData = await getBlockFaqPublicData(page);
    const blockBlogData = await getBlockBlogPublicData(page);

    return {
      body: [
        blockHero,
        blockAbout,
        blockReviewData,
        blockAchivmentsData,
        blockContactsData,
        blockFaqData,
        blockBlogData,
      ],
    };
  }
}

export default PageCompanyService;
