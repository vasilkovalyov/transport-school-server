import express from "express";
import { BlockBlogController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockBlogController();

router.post("/block/blog-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/blog-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/blog/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/blog/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/blog/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
