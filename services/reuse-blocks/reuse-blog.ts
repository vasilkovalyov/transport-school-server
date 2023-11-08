import { BlockBlogModel } from "../../models";
import PostService from "../post";

class ReuseBlockBlog {
  async getBlockForPublic(page: string, pageNumber: number = 1) {
    const blockBlog = await BlockBlogModel.findOne({ block_page: page, publish: true });
    const postService = new PostService();
    let blockData: unknown = null;

    if (blockBlog) {
      const responsePosts = await postService.getPaginatedPosts(blockBlog.post_number || 3, pageNumber);

      blockData = {
        _id: blockBlog._id,
        post_number: blockBlog.post_number,
        block_name: blockBlog.block_name,
        block_order: blockBlog.block_order,
        block_page: blockBlog.block_page,
        heading: blockBlog.heading,
        publish: blockBlog.publish,
        posts: responsePosts.posts,
        next_page: responsePosts.next_page,
      };
      return blockData;
    }

    return null;
  }
}

export default ReuseBlockBlog;
