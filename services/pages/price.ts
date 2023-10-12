import { BlockHeroModel, BlockFormatLessonsModel, BlockTeamEducationModel, BlockRequirementModel } from "../../models";
import { getBlockContactsPublicData } from "../public/reuse-blocks";

import { IPage } from "./type";

class PagePriceService {
  async getPage(): Promise<IPage> {
    const page = "price";
    const params = { block_page: page, publish: true };

    const blockHero = await BlockHeroModel.findOne(params);
    const blockFormatLessons = await BlockFormatLessonsModel.findOne(params);
    const blockTeamEducation = await BlockTeamEducationModel.findOne(params);
    const blockRequirement = await BlockRequirementModel.findOne(params);

    const blockContactsData = await getBlockContactsPublicData(page);

    return {
      body: [blockHero, blockFormatLessons, blockTeamEducation, blockRequirement, blockContactsData],
    };
  }
}

export default PagePriceService;
