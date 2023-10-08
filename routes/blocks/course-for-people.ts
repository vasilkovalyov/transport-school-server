import express from "express";
import { BlockCourseForPeopleController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockCourseForPeopleController();

router.post("/block/course-for-people-create", (req, res) => controller.create(req, res));
router.patch("/block/course-for-people-update", (req, res) => controller.update(req, res));
router.get("/blocks/course-for-people/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/course-for-people/publish", (req, res) => controller.publish(req, res));
router.patch("/block/course-for-people/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
