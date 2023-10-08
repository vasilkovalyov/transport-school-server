import express from "express";
import { BlockBlogController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockBlogController();

router.post("/block/blog-create", (req, res) => controller.create(req, res));
router.patch("/block/blog-update", (req, res) => controller.update(req, res));
router.get("/blocks/blog/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/blog/publish", (req, res) => controller.publish(req, res));
router.patch("/block/blog/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
