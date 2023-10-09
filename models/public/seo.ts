import { Schema, model } from "mongoose";

export interface ISeo {
  _id: String;
  title: string;
  description: string;
  keywords: string;
  page: string;
}

export const SeoSchema = new Schema<ISeo>({
  page: { type: String, required: true, unique: true },
  title: { type: String, required: true, unique: true },
  description: { type: String, default: null },
  keywords: { type: String, default: null },
});

const Seo = model("Seo", SeoSchema);

export default Seo;
