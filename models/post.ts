import { Schema, model } from "mongoose";

export interface IPost {
  heading: string;
  slug: string;
  short_description: string;
  rich_text: string;
}

export const PostSchema = new Schema<IPost>({
  heading: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  short_description: { type: String },
  rich_text: { type: String },
});

const Post = model("Post", PostSchema);

export default Post;
