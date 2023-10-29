const CLOUDINARY_NAME = "dh5dvguqw";
const CLOUDINARY_KEY = "971891743274228";
const CLOUDINARY_SECRET = "ubFMeThpfbgowAlso2dBfzMEILc";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

export default cloudinary;
