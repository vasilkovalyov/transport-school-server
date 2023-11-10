import express from "express";
import { PostsController } from "../../controllers/public";

const router = express.Router();
const controller = new PostsController();

router.get("/posts", (res, req) => controller.getPaginatedPosts(res, req));
router.get("/posts/:slug", (res, req) => controller.getPostBySlug(res, req));

export default router;
