import express from "express";
import { PostController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const postController = new PostController();

router.post("/post-create", (req, res) => postController.create(req, res));
router.patch("/post-update/:id", (req, res) => postController.update(req, res));
router.delete("/post-delete/:id", (req, res) => postController.delete(req, res));
router.get("/posts", (req, res) => postController.getPaginatedPosts(req, res));
router.get("/posts/:id", (req, res) => postController.getPost(req, res));

export default router;
