import {
  IBlockAboutCourse,
  IBlockAboutUs,
  IBlockAbout,
  IBlockAchivments,
  IBlockBenefits,
  IBlockBlog,
  IBlockContactForm,
  IBlockContacts,
  IBlockCourseForPeople,
  IBlockCta,
  IBlockFormatLessons,
  IBlockHero,
  IBlockRequirement,
  IBlockReviews,
  IBlockSchedule,
  IBlockStructEducation,
  IBlockTeamEducation,
  IBlockWhoTeach,
  ICommonContacts,
} from "../../models";

export interface ISeo {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface IPage {
  seo?: ISeo;
  body?: PageBodyProps[];
  contacts?: ICommonContacts;
}

export type PageBodyProps =
  | IBlockHero
  | IBlockAboutUs
  | IBlockAboutCourse
  | IBlockAbout
  | IBlockAchivments
  | IBlockBenefits
  | IBlockBlog
  | IBlockContactForm
  | IBlockContacts
  | IBlockCourseForPeople
  | IBlockCta
  | IBlockFormatLessons
  | IBlockRequirement
  | IBlockReviews
  | IBlockSchedule
  | IBlockStructEducation
  | IBlockTeamEducation
  | IBlockWhoTeach;
