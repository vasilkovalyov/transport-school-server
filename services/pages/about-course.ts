import {
  IBlockHero,
  BlockHeroModel,
  IBlockCourseForPeople,
  BlockCourseForPeopleModel,
  IBlockStructEducation,
  BlockStructEducationModel,
  IBlockBenefits,
  BlockBenefitsModel,
  IBlockWhoTeach,
  BlockWhoTeachModel,
} from "../../models";
import { IPage } from "./type";

class PageAboutCourseService {
  async getPage(): Promise<IPage> {
    const page = "about-course";
    const blockHero = await BlockHeroModel.findOne({ block_page: page, publish: true });
    const blockCourseForPeople = await BlockCourseForPeopleModel.findOne({ block_page: page, publish: true });
    const blockStructEducation = await BlockStructEducationModel.findOne({ block_page: page, publish: true });
    const blockBenefits = await BlockBenefitsModel.findOne({ block_page: page, publish: true });
    const blockWhoTeach = await BlockWhoTeachModel.findOne({ block_page: page, publish: true });

    return {
      body: [
        blockHero as IBlockHero,
        blockCourseForPeople as IBlockCourseForPeople,
        blockStructEducation as IBlockStructEducation,
        blockBenefits as IBlockBenefits,
        blockWhoTeach as IBlockWhoTeach,
      ],
    };
  }
}

export default PageAboutCourseService;
