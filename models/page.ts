import { Schema, model } from "mongoose";

export interface ISeo {
  title: string;
  description: string;
  keywords: string;
}

export interface IPage {
  _id: string;
  seo: ISeo;
  title: string;
  slug: string;
}

export const PageSchema = new Schema<IPage>({
  title: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
});

export const Page = model("Page", PageSchema);

export default Page;
