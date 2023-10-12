import { IReview, ReviewModel } from "../../models/public";

class ReviewService {
  async create(params: IReview) {
    const review = await new ReviewModel(params);
    await review.save();
    return {
      message: "Review has created",
    };
  }

  async update(data: IReview) {
    await ReviewModel.findOneAndUpdate({ _id: data._id }, data, { new: true });
    return {
      message: "Review has updated",
    };
  }

  async delete(id: string) {
    await ReviewModel.findOneAndDelete({ _id: id });
    return {
      message: "Review has deleted",
    };
  }

  async getReview(id: string) {
    const response = await ReviewModel.findOne({ _id: id });
    return response;
  }

  async getAll() {
    const posts = await ReviewModel.find();
    return posts;
  }
}

export default ReviewService;
