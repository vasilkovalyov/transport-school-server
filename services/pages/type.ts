import {
  BlockAboutCourseType,
  BlockAboutUsType,
  BlockAboutType,
  BlockAchivmentsType,
  BlockBenefitsType,
  BlockBlogType,
  BlockContactFormType,
  BlockContactsType,
  BlockCourseForPeopleType,
  BlockCtaType,
  BlockFormatLessonsType,
  BlockHeroType,
  BlockRequirementType,
  BlockReviewsType,
  BlockScheduleType,
  BlockStructEducationType,
  BlockTeamEducationType,
  BlockWhoTeachType,
  CommonContactsType,
  PostType,
} from "../../models";

export type SeoType = {
  title?: string;
  description?: string;
  keywords?: string;
};

export type PageType = {
  seo?: SeoType;
  body?: PageBodyProps[];
  contacts?: CommonContactsType;
};

export type SingleBlogType = {
  post: PostType;
  blockRelatedPosts?: {
    posts: PostType[];
  };
  blockCta?: BlockCtaType;
};

export type PageBodyProps =
  | BlockHeroType
  | BlockAboutUsType
  | BlockAboutCourseType
  | BlockAboutType
  | BlockAchivmentsType
  | BlockBenefitsType
  | BlockBlogType
  | BlockContactFormType
  | BlockContactsType
  | BlockCourseForPeopleType
  | BlockCtaType
  | BlockFormatLessonsType
  | BlockRequirementType
  | BlockReviewsType
  | BlockScheduleType
  | BlockStructEducationType
  | BlockTeamEducationType
  | BlockWhoTeachType
  | unknown;
