import { BlockHeroModel, BlockScheduleModel } from "../../models";
import { getBlockContactsPublicData } from "../public/reuse-blocks";

import { IPage } from "./type";

class PageScheduleService {
  async getPage(): Promise<IPage> {
    const page = "schedule";
    const params = { block_page: page, publish: true };
    const blockHero = await BlockHeroModel.findOne(params);
    const blockSchedule = await BlockScheduleModel.findOne(params);

    const blockContactsData = await getBlockContactsPublicData(page);

    return {
      body: [blockHero, blockSchedule, blockContactsData],
    };
  }
}

export default PageScheduleService;
