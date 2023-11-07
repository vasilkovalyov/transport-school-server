import express from "express";
import { PageBlogSingleController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PageBlogSingleController();

router.get("/page/blog/:slug", authMiddleware, (req, res) => controller.getPage(req, res));

export default router;
