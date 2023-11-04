import {
  BlockAchivmentsModel,
  BlockFaqModel,
  BlockCtaModel,
  BlockContactsModel,
  BlockReviewsModel,
  BlockBlogModel,
  CommonContactsModel,
  ServiceModel,
  BlockFormatLessonsModel,
} from "../../models";

import {
  ReuseBlockFaqModel,
  ReuseBlockAchivmentModel,
  ReuseBlockCtaModel,
  ReuseBlockContactsModel,
  ReuseBlockReviewModel,
} from "../../models/reuse-blocks";

import { BlockScheduleModel } from "../../models/blocks";

import { ReviewModel } from "../../models/public";
import PostService from "../post";
import LessonScheduleService from "../lesson-schedule";

export async function getBlockFaqPublicData(page: string) {
  const block = await BlockFaqModel.findOne({ block_page: page, publish: true }).select(
    "_id block_name block_order block_page publish",
  );

  let blockData: unknown = null;

  if (block) {
    const reuseBlock = await ReuseBlockFaqModel.findOne().select("heading list_faq image");

    blockData = {
      _id: block?._id,
      block_name: block?.block_name,
      block_order: block?.block_order,
      block_page: block?.block_page,
      publish: block?.publish,
      heading: reuseBlock?.heading,
      list_faq: reuseBlock?.list_faq,
      image: reuseBlock?.image,
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

  const contactsData = await CommonContactsModel.findOne();

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
      phone: contactsData?.phone,
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

export async function getBlockLessonSchedulesPublicData(page: string, pageNumber: number = 1) {
  const blockScheduleLesson = await BlockScheduleModel.findOne({ block_page: page, publish: true });
  const lessonScheduleService = new LessonScheduleService();
  let blockData: unknown = null;

  if (blockScheduleLesson) {
    const responsePosts = await lessonScheduleService.getUpcomingPaginatedPosts(
      blockScheduleLesson.post_number || 3,
      pageNumber,
    );

    blockData = {
      _id: blockScheduleLesson._id,
      post_number: blockScheduleLesson.post_number,
      block_name: blockScheduleLesson.block_name,
      block_order: blockScheduleLesson.block_order,
      block_page: blockScheduleLesson.block_page,
      heading: blockScheduleLesson.heading,
      publish: blockScheduleLesson.publish,
      posts: responsePosts.posts,
      next_page: responsePosts.next_page,
    };
    return blockData;
  }

  return null;
}

export async function getBlockServicesPublicData(page: string) {
  const block = await BlockFormatLessonsModel.findOne({ block_page: page, publish: true }).select(
    "_id block_name block_order block_page publish heading rich_text use_dark_theme",
  );

  let blockData: unknown = null;

  if (block) {
    const services = await ServiceModel.find();

    blockData = {
      _id: block?._id,
      block_name: block?.block_name,
      block_order: block?.block_order,
      block_page: block?.block_page,
      publish: block?.publish,
      heading: block?.heading,
      rich_text: block?.rich_text,
      services: services,
      use_dark_theme: block.use_dark_theme,
    };
    return blockData;
  }

  return null;
}
