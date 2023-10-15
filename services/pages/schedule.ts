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

    return {
      body: [blockHero, blockScheduleData, blockContactsData],
    };
  }
}

export default PageScheduleService;
