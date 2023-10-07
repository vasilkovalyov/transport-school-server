import express from "express";
import { BlockAboutCourseController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockAboutCourseController();

router.post("/block/about-course-create", (req, res) => controller.create(req, res));
router.patch("/block/about-course-update", (req, res) => controller.update(req, res));
router.get("/blocks/about-course/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/about-course/publish", (req, res) => controller.publish(req, res));
router.patch("/block/about-course/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
