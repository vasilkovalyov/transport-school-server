import { PostType, PostModel } from "../models";
import { getPaginationInfo } from "../utils/pagination";
import { uploadImage } from "./file-uploader";

class PostService {
  async create(data: PostType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const post = await new PostModel({
      ...data,
      image,
    });
    await post.save();

    return {
      _id: post._id,
      message: "Post has created",
    };
  }

  async update(data: PostType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await PostModel.findOneAndUpdate(
      { _id: data._id },
      {
        ...data,
        image,
      },
      { new: true },
    );
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
    const posts = await PostModel.find({}, null, { sort: { createdAt: -1 } })
      .skip(skip_size)
      .limit(size)
      .exec();

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

  async getPostBySlug(slug: string) {
    const post = await PostModel.findOne({ slug: slug });
    return post;
  }

  async getPostSeo(slug: string) {
    const post = await PostModel.findOne({ slug: slug }).select("heading seo_description seo_keywords");
    if (!post) {
      throw new Error("Post not found");
    }

    return {
      title: post?.heading,
      description: post?.seo_description,
      keywords: post?.seo_keywords,
    };
  }
}

export default PostService;
