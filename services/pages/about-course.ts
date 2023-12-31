import {
  BlockHeroModel,
  BlockCourseForPeopleModel,
  BlockStructEducationModel,
  BlockBenefitsModel,
  BlockWhoTeachModel,
} from "../../models";

import { ReuseBlockCtaService } from "../reuse-blocks";

import { PageType } from "./type";

class PageAboutCourseService {
  async getPage(): Promise<PageType> {
    const page = "about-course";
    const params = { block_page: page, publish: true };

    const reuseBlockCtaServiceService = new ReuseBlockCtaService();

    const blockHero = await BlockHeroModel.findOne(params);
    const blockCourseForPeople = await BlockCourseForPeopleModel.findOne(params);
    const blockStructEducation = await BlockStructEducationModel.findOne(params);
    const blockBenefits = await BlockBenefitsModel.findOne(params);
    const blockWhoTeach = await BlockWhoTeachModel.findOne(params);

    const blockCtaData = await reuseBlockCtaServiceService.getBlockForPublic(page);

    const blocks = [
      blockHero,
      blockCourseForPeople,
      blockStructEducation,
      blockBenefits,
      blockWhoTeach,
      blockCtaData,
    ].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageAboutCourseService;
