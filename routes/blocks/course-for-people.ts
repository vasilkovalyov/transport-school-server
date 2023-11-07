import express from "express";
import { BlockCourseForPeopleController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockCourseForPeopleController();

router.post("/block/course-for-people-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/course-for-people-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/course-for-people/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/course-for-people/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/course-for-people/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
