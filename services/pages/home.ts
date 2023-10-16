import { BlockHeroModel, BlockAboutUsModel, BlockAboutCourseModel } from "../../models";
import {
  getBlockFaqPublicData,
  getBlockAchivmentsPublicData,
  getBlockServicesPublicData,
} from "../public/reuse-blocks";
import { IPage } from "./type";

class PageHomeService {
  async getPage(): Promise<IPage> {
    const page = "home";
    const params = { block_page: page, publish: true };
    const blockHero = await BlockHeroModel.findOne(params);
    const blockAboutUs = await BlockAboutUsModel.findOne(params);
    const blockAbouCourse = await BlockAboutCourseModel.findOne(params);

    const blockFormatLessons = await getBlockServicesPublicData(page);
    const blockFaqData = await getBlockFaqPublicData(page);
    const blockAchivmentsData = await getBlockAchivmentsPublicData(page);

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
