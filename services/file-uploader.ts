import cloudinary from "../utils/cloudinary";

// avatarImage base64 type
export async function uploadImage(image: string) {
  const res = await cloudinary.uploader.upload(image, {
    folder: "tbs/images",
  });
  return res;
}
