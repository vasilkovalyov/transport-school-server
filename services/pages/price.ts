import { BlockHeroModel, BlockTeamEducationModel, BlockRequirementModel } from "../../models";
import { ReuseBlockContactsService, ReuseBlockServicesService } from "../reuse-blocks";

import { PageType } from "./type";

class PagePriceService {
  async getPage(): Promise<PageType> {
    const page = "price";
    const params = { block_page: page, publish: true };
    const reuseBlockContactsService = new ReuseBlockContactsService();
    const reuseBlockServicesService = new ReuseBlockServicesService();

    const blockHero = await BlockHeroModel.findOne(params);
    const blockTeamEducation = await BlockTeamEducationModel.findOne(params);
    const blockRequirement = await BlockRequirementModel.findOne(params);

    const blockFormatLessons = await reuseBlockServicesService.getBlockForPublic(page);
    const blockContactsData = await reuseBlockContactsService.getBlockForPublic(page);

    const blocks = [blockHero, blockFormatLessons, blockTeamEducation, blockRequirement, blockContactsData].filter(
      (item) => item,
    );

    return {
      body: blocks,
    };
  }
}

export default PagePriceService;
