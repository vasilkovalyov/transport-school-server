import { BlockCtaType, PostType, PostModel, CommonContactsModel } from "../../models";
import { ReuseBlockCtaModel } from "../../models/reuse-blocks";

import { SingleBlogType } from "./type";

class PageBlogSingleService {
  async getPage(slug: string): Promise<SingleBlogType> {
    const post = await PostModel.findOne({ slug: slug });
    const ctaReuseBlock = await ReuseBlockCtaModel.findOne();
    const contactsData = await CommonContactsModel.findOne();
    const posts = await PostModel.aggregate([{ $match: { slug: { $ne: slug } } }, { $sample: { size: 3 } }]);

    let blockCtaData: unknown = null;

    if (ctaReuseBlock) {
      blockCtaData = {
        _id: ctaReuseBlock?._id,
        block_name: ctaReuseBlock?.block_name,
        heading: ctaReuseBlock?.heading,
        use_link_to_contact_page: ctaReuseBlock?.use_link_to_contact_page,
        use_phone_cta: ctaReuseBlock?.use_phone_cta,
        phone: contactsData?.phone,
      };
    }

    return {
      post: post as unknown as PostType,
      blockRelatedPosts: {
        posts: posts,
      },
      blockCta: blockCtaData as BlockCtaType,
    };
  }
}

export default PageBlogSingleService;
