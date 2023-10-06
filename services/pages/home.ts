import { BlockHeroModel, IBlockHero } from "../../models";
import { IPage } from "./type";

class PageHomeService {
  async getPage(): Promise<IPage> {
    const page = "home";
    const post = await BlockHeroModel.findOne({ block_page: page, publish: true });

    return {
      body: [post as IBlockHero],
    };
  }
}

export default PageHomeService;
