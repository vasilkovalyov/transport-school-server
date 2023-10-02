import express from "express";
import PostController from "../controllers/post";
import authMiddleware from "../middlewares/auth";

const router = express.Router();
const postController = new PostController();

router.post("/post-create", postController.create);
router.patch("/post-update/:id", postController.update);
router.delete("/post-delete/:id", postController.delete);
router.get("/posts", postController.getPaginatedPosts);
router.get("/post/:id", postController.getPost);

export default router;
