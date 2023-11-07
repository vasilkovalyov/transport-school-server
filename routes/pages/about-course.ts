import express from "express";
import { PageAboutCourseController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PageAboutCourseController();

router.get("/page/about-course", authMiddleware, (req, res) => controller.getPage(req, res));

export default router;
