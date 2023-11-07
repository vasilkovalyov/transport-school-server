import express from "express";
import { PostsController } from "../../controllers/public";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PostsController();

router.get("/posts", authMiddleware, (res, req) => controller.getPaginatedPosts(res, req));
router.get("/posts/:slug", authMiddleware, (res, req) => controller.getPostBySlug(res, req));

export default router;
