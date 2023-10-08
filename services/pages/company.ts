import {
  IBlockHero,
  BlockHeroModel,
  IBlockAbout,
  BlockAboutModel,
  IBlockReviews,
  BlockReviewsModel,
} from "../../models";
import { IPage } from "./type";

class PageCompanyService {
  async getPage(): Promise<IPage> {
    const page = "company";
    const blockHero = await BlockHeroModel.findOne({ block_page: page, publish: true });
    const blockAbout = await BlockAboutModel.findOne({ block_page: page, publish: true });
    const blockReview = await BlockReviewsModel.findOne({ block_page: page, publish: true });

    return {
      body: [blockHero as IBlockHero, blockAbout as IBlockAbout, blockReview as IBlockReviews],
    };
  }
}

export default PageCompanyService;
