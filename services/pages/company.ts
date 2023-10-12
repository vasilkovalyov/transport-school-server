import { BlockHeroModel, BlockAboutModel, BlockBlogModel } from "../../models";

import {
  getBlockFaqPublicData,
  getBlockAchivmentsPublicData,
  getBlockContactsPublicData,
  getBlockReviewsPublicData,
} from "../public/reuse-blocks";

import { IPage } from "./type";

class PageCompanyService {
  async getPage(): Promise<IPage> {
    const page = "company";
    const params = { block_page: page, publish: true };

    const blockHero = await BlockHeroModel.findOne(params);
    const blockAbout = await BlockAboutModel.findOne(params);
    const blockBlog = await BlockBlogModel.findOne(params);

    const blockAchivmentsData = await getBlockAchivmentsPublicData(page);
    const blockContactsData = await getBlockContactsPublicData(page);
    const blockReviewData = await getBlockReviewsPublicData(page);

    const blockFaqData = await getBlockFaqPublicData(page);

    return {
      body: [blockHero, blockAbout, blockReviewData, blockAchivmentsData, blockContactsData, blockFaqData, blockBlog],
    };
  }
}

export default PageCompanyService;
