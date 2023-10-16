import { BlockHeroModel } from "../../models";
import { getBlockContactsPublicData, getBlockLessonSchedulesPublicData } from "../public/reuse-blocks";

import { IPage } from "./type";

class PageScheduleService {
  async getPage(): Promise<IPage> {
    const page = "schedule";
    const params = { block_page: page, publish: true };
    const blockHero = await BlockHeroModel.findOne(params);

    const blockScheduleData = await getBlockLessonSchedulesPublicData(page);
    const blockContactsData = await getBlockContactsPublicData(page);

    const blocks = [blockHero, blockScheduleData, blockContactsData].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageScheduleService;
