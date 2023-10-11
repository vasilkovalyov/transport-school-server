import { Schema, model } from "mongoose";

export interface IReview {
  _id: string;
  name: string;
  text: string;
  rating: number;
}

export const ReviewSchema = new Schema<IReview>({
  name: { type: String },
  text: { type: String },
  rating: { type: Number },
});

const Review = model("Review", ReviewSchema);

export default Review;
