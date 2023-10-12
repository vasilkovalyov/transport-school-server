import express from "express";
import { PostsController } from "../../controllers/public";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PostsController();

router.get("/posts", (res, req) => controller.getPaginatedPosts(res, req));

export default router;
