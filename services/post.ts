import { IPost, PostModel } from "../models";
import { getPaginationInfo } from "../utils/pagination";

class PostService {
  async create(data: IPost) {
    const post = await new PostModel(data);
    await post.save();

    return {
      _id: post._id,
      message: "Post has created",
    };
  }

  async update(data: IPost) {
    await PostModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Post has updated",
    };
  }

  async delete(id: string) {
    const post = await PostModel.deleteOne({
      _id: id,
    });
    if (!post.deletedCount) {
      throw new Error("Post already delete");
    }

    return {
      message: "Post has deleted",
    };
  }

  async getPaginatedPosts(size: number, page: number) {
    const total_count = await PostModel.countDocuments();
    const { nextPage, total_pages, skip_size } = getPaginationInfo(size, page, total_count);
    const posts = await PostModel.find().skip(skip_size).limit(size).exec();

    return {
      total_count,
      current_page: page,
      next_page: nextPage,
      total_pages: total_pages,
      posts,
    };
  }

  async getPost(id: string) {
    const post = await PostModel.findById(id);
    return post;
  }
}

export default PostService;
