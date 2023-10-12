import {
  BlockHeroModel,
  BlockCourseForPeopleModel,
  BlockStructEducationModel,
  BlockBenefitsModel,
  BlockWhoTeachModel,
} from "../../models";
import { getBlockCtaPublicData } from "../public/reuse-blocks";

import { IPage } from "./type";

class PageAboutCourseService {
  async getPage(): Promise<IPage> {
    const page = "about-course";
    const params = { block_page: page, publish: true };
    const blockHero = await BlockHeroModel.findOne(params);
    const blockCourseForPeople = await BlockCourseForPeopleModel.findOne(params);
    const blockStructEducation = await BlockStructEducationModel.findOne(params);
    const blockBenefits = await BlockBenefitsModel.findOne(params);
    const blockWhoTeach = await BlockWhoTeachModel.findOne(params);

    const blockCtaData = await getBlockCtaPublicData(page);

    return {
      body: [blockHero, blockCourseForPeople, blockStructEducation, blockBenefits, blockWhoTeach, blockCtaData],
    };
  }
}

export default PageAboutCourseService;
