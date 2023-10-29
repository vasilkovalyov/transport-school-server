import { Schema, model } from "mongoose";

export type PostType = {
  _id: string;
  heading: string;
  slug: string;
  short_description: string;
  rich_text: string;
  createdAt: Date;
};

export const PostSchema = new Schema<PostType>(
  {
    heading: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    short_description: { type: String, default: null },
    rich_text: { type: String, default: null },
  },
  {
    timestamps: true,
  },
);

export const Post = model("Post", PostSchema);

export default Post;
