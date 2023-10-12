import {
  BlockAchivmentsModel,
  BlockFaqModel,
  BlockCtaModel,
  BlockContactsModel,
  BlockReviewsModel,
  BlockBlogModel,
} from "../../models";

import {
  ReuseBlockFaqModel,
  ReuseBlockAchivmentModel,
  ReuseBlockCtaModel,
  ReuseBlockContactsModel,
  ReuseBlockReviewModel,
} from "../../models/reuse-blocks";

import { ReviewModel } from "../../models/public";
import PostService from "../post";

export async function getBlockFaqPublicData(page: string) {
  const block = await BlockFaqModel.findOne({ block_page: page, publish: true }).select(
    "_id block_name block_order block_page publish",
  );

  let blockData: unknown = null;

  if (block) {
    const reuseBlock = await ReuseBlockFaqModel.findOne().select("heading list_faq");

    blockData = {
      _id: block?._id,
      block_name: block?.block_name,
      block_order: block?.block_order,
      block_page: block?.block_page,
      publish: block?.publish,
      heading: reuseBlock?.heading,
      list_faq: reuseBlock?.list_faq,
    };
    return blockData;
  }

  return null;
}

export async function getBlockAchivmentsPublicData(page: string) {
  const block = await BlockAchivmentsModel.findOne({ block_page: page, publish: true }).select(
    "_id block_name block_order block_page publish",
  );

  let blockData: unknown = null;

  if (block) {
    const reuseBlock = await ReuseBlockAchivmentModel.findOne().select("heading subheading list_achivments");

    blockData = {
      _id: block?._id,
      block_name: block?.block_name,
      block_order: block?.block_order,
      block_page: block?.block_page,
      publish: block?.publish,
      heading: reuseBlock?.heading,
      subheading: reuseBlock?.subheading,
      list_achivments: reuseBlock?.list_achivments,
    };

    return blockData;
  }

  return null;
}

export async function getBlockCtaPublicData(page: string) {
  const block = await BlockCtaModel.findOne({ block_page: page, publish: true }).select(
    "_id block_name block_order block_page publish",
  );

  let blockData: unknown = null;

  if (block) {
    const reuseBlock = await ReuseBlockCtaModel.findOne().select("heading use_link_to_contact_page use_phone_cta");

    blockData = {
      _id: block?._id,
      block_name: block?.block_name,
      block_order: block?.block_order,
      block_page: block?.block_page,
      publish: block?.publish,
      heading: reuseBlock?.heading,
      use_link_to_contact_page: reuseBlock?.use_link_to_contact_page,
      use_phone_cta: reuseBlock?.use_phone_cta,
    };

    return blockData;
  }

  return null;
}

export async function getBlockContactsPublicData(page: string) {
  const block = await BlockContactsModel.findOne({ block_page: page, publish: true }).select(
    "_id block_name block_order block_page publish",
  );

  let blockData: unknown = null;

  if (block) {
    const reuseBlock = await ReuseBlockContactsModel.findOne().select("heading address phone email map_url");

    blockData = {
      _id: block?._id,
      block_name: block?.block_name,
      block_order: block?.block_order,
      block_page: block?.block_page,
      publish: block?.publish,
      heading: reuseBlock?.heading,
      address: reuseBlock?.address,
      phone: reuseBlock?.phone,
      email: reuseBlock?.email,
      map_url: reuseBlock?.map_url,
    };
    return blockData;
  }

  return null;
}

export async function getBlockReviewsPublicData(page: string) {
  const block = await BlockReviewsModel.findOne({ block_page: page, publish: true }).select(
    "_id block_name block_order block_page publish",
  );

  let blockData: unknown = null;

  if (block) {
    const reuseBlock = await ReuseBlockReviewModel.findOne().select("heading");
    const reviews = await ReviewModel.find();

    blockData = {
      _id: block._id,
      block_name: block.block_name,
      block_order: block.block_order,
      block_page: block.block_page,
      publish: block.publish,
      heading: reuseBlock?.heading,
      reviews: reviews,
    };
    return blockData;
  }

  return null;
}

export async function getBlockBlogPublicData(page: string, pageNumber: number = 1) {
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
