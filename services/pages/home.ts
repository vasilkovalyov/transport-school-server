import { BlockHeroModel, BlockAboutUsModel, BlockAboutCourseModel } from "../../models";

import { ReuseBlockFaqService, ReuseBlockAchivmentsService, ReuseBlockServicesService } from "../reuse-blocks";
import { PageType } from "./type";

class PageHomeService {
  async getPage(): Promise<PageType> {
    const page = "home";
    const params = { block_page: page, publish: true };
    const reuseBlockFaqService = new ReuseBlockFaqService();
    const reuseBlockAchivmentsService = new ReuseBlockAchivmentsService();
    const reuseBlockServicesService = new ReuseBlockServicesService();

    const blockHero = await BlockHeroModel.findOne(params);
    const blockAboutUs = await BlockAboutUsModel.findOne(params);
    const blockAbouCourse = await BlockAboutCourseModel.findOne(params);

    const blockFormatLessons = await reuseBlockServicesService.getBlockForPublic(page);
    const blockFaqData = await reuseBlockFaqService.getBlockForPublic(page);
    const blockAchivmentsData = await reuseBlockAchivmentsService.getBlockForPublic(page);

    const blocks = [
      blockHero,
      blockAboutUs,
      blockAbouCourse,
      blockFormatLessons,
      blockFaqData,
      blockAchivmentsData,
    ].filter((item) => item);

    return {
      body: blocks,
    };
  }
}

export default PageHomeService;
