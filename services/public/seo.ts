import { ISeo, SeoModel } from "../../models/public";

class SeoService {
  async update(data: ISeo) {
    const post = await SeoModel.findOne({ page: data.page });

    if (!post) {
      const seo = await new SeoModel(data);
      await seo.save();
      return {
        message: "Seo has saved",
      };
    }

    post.title = data.title;
    post.description = data.description;
    post.keywords = data.keywords;
    await post.save();

    return {
      message: "Seo has saved",
    };
  }

  async getInfo(pageName: string) {
    const post = await SeoModel.findOne({ page: pageName });
    return post;
  }
}

export default SeoService;
