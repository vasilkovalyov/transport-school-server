import express from "express";
import { BlockAboutCourseController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockAboutCourseController();

router.post("/block/about-course-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/about-course-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/about-course/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/about-course/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/about-course/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
