import { IBlockHero, BlockHeroModel, IBlockSchedule, BlockScheduleModel } from "../../models";
import { IPage } from "./type";

class PageScheduleService {
  async getPage(): Promise<IPage> {
    const page = "schedule";
    const blockHero = await BlockHeroModel.findOne({ block_page: page, publish: true });
    const blockSchedule = await BlockScheduleModel.findOne({ block_page: page, publish: true });

    return {
      body: [blockHero as IBlockHero, blockSchedule as IBlockSchedule],
    };
  }
}

export default PageScheduleService;
