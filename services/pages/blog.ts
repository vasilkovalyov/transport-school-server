import { IBlockHero, BlockHeroModel, IBlockBlog, BlockBlogModel } from "../../models";
import { IPage } from "./type";

class PageBlogService {
  async getPage(): Promise<IPage> {
    const page = "blog";
    const blockHero = await BlockHeroModel.findOne({ block_page: page, publish: true });
    const blockBlog = await BlockBlogModel.findOne({ block_page: page, publish: true });

    return {
      body: [blockHero as IBlockHero, blockBlog as IBlockBlog],
    };
  }
}

export default PageBlogService;
