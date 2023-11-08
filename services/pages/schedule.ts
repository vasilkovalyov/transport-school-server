import { BlockHeroModel } from "../../models";
import { ReuseBlockContactsService, ReuseBlockLessonsService } from "../reuse-blocks";

import { PageType } from "./type";

class PageScheduleService {
  async getPage(): Promise<PageType> {
    const page = "schedule";
    const params = { block_page: page, publish: true };
    const reuseBlockContactsService = new ReuseBlockContactsService();
    const reuseBlockLessonsService = new ReuseBlockLessonsService();

    const blockHero = await BlockHeroModel.findOne(params);

    const blockScheduleData = await reuseBlockLessonsService.getBlockForPublic(page);
    const blockContactsData = await reuseBlockContactsService.getBlockForPublic(page);

    const blocks = [blockHero, blockScheduleData, blockContactsData].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageScheduleService;
