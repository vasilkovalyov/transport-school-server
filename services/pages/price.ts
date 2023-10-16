import { BlockHeroModel, BlockTeamEducationModel, BlockRequirementModel } from "../../models";
import { getBlockContactsPublicData, getBlockServicesPublicData } from "../public/reuse-blocks";

import { IPage } from "./type";

class PagePriceService {
  async getPage(): Promise<IPage> {
    const page = "price";
    const params = { block_page: page, publish: true };

    const blockHero = await BlockHeroModel.findOne(params);
    const blockTeamEducation = await BlockTeamEducationModel.findOne(params);
    const blockRequirement = await BlockRequirementModel.findOne(params);

    const blockFormatLessons = await getBlockServicesPublicData(page);
    const blockContactsData = await getBlockContactsPublicData(page);

    const blocks = [blockHero, blockFormatLessons, blockTeamEducation, blockRequirement, blockContactsData].filter(
      (item) => item,
    );

    return {
      body: blocks,
    };
  }
}

export default PagePriceService;
