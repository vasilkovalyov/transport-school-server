import express from "express";
import { PageBlogController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PageBlogController();

router.get("/page/blog", authMiddleware, (req, res) => controller.getPage(req, res));

export default router;
