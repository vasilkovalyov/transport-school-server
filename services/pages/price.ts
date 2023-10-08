import {
  IBlockHero,
  BlockHeroModel,
  IBlockFormatLessons,
  BlockFormatLessonsModel,
  IBlockTeamEducation,
  BlockTeamEducationModel,
  IBlockRequirement,
  BlockRequirementModel,
} from "../../models";
import { IPage } from "./type";

class PagePriceService {
  async getPage(): Promise<IPage> {
    const page = "price";
    const blockHero = await BlockHeroModel.findOne({ block_page: page, publish: true });
    const blockFormatLessons = await BlockFormatLessonsModel.findOne({ block_page: page, publish: true });
    const blockTeamEducation = await BlockTeamEducationModel.findOne({ block_page: page, publish: true });
    const blockRequirement = await BlockRequirementModel.findOne({ block_page: page, publish: true });

    return {
      body: [
        blockHero as IBlockHero,
        blockFormatLessons as IBlockFormatLessons,
        blockTeamEducation as IBlockTeamEducation,
        blockRequirement as IBlockRequirement,
      ],
    };
  }
}

export default PagePriceService;
