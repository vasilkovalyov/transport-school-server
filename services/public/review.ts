import { ReviewType, ReviewModel } from "../../models/public";
import { uploadImage } from "../file-uploader";

class ReviewService {
  async create(data: ReviewType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    const review = await new ReviewModel({
      ...data,
      image,
    });
    await review.save();
    return {
      message: "Review has created",
    };
  }

  async update(data: ReviewType) {
    let image = "";

    if (data.image) {
      const response = await uploadImage(data.image);
      image = response.secure_url;
    }

    await ReviewModel.findOneAndUpdate(
      { _id: data._id },
      {
        ...data,
        image,
      },
      { new: true },
    );
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
