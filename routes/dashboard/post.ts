import express from "express";
import { PostController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const postController = new PostController();

router.post("/post-create", authMiddleware, (req, res) => postController.create(req, res));
router.patch("/post-update", authMiddleware, (req, res) => postController.update(req, res));
router.delete("/post-delete/:id", authMiddleware, (req, res) => postController.delete(req, res));
router.get("/posts", authMiddleware, (req, res) => postController.getPaginatedPosts(req, res));
router.get("/posts/:id", authMiddleware, (req, res) => postController.getPost(req, res));

export default router;
