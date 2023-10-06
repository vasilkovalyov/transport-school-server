import { IBlockHero } from "../../models";

export interface ISeo {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface IPage {
  seo?: ISeo;
  body?: [IBlockHero];
}
