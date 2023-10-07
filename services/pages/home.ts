import {
  IBlockHero,
  BlockHeroModel,
  IBlockAboutUs,
  BlockAboutUsModel,
  IBlockAboutCourse,
  BlockAboutCourseModel,
  IBlockFormatLessons,
  BlockFormatLessonsModel,
} from "../../models";
import { IPage } from "./type";

class PageHomeService {
  async getPage(): Promise<IPage> {
    const page = "home";
    const blockHero = await BlockHeroModel.findOne({ block_page: page, publish: true });
    const blockAboutUs = await BlockAboutUsModel.findOne({ block_page: page, publish: true });
    const blockAbouCourse = await BlockAboutCourseModel.findOne({ block_page: page, publish: true });
    const blockFormatLessons = await BlockFormatLessonsModel.findOne({ block_page: page, publish: true });

    return {
      body: [
        blockHero as IBlockHero,
        blockAboutUs as IBlockAboutUs,
        blockAbouCourse as IBlockAboutCourse,
        blockFormatLessons as IBlockFormatLessons,
      ],
    };
  }
}

export default PageHomeService;
