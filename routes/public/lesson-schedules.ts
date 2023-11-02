import express from "express";
import { LessonScheduleController } from "../../controllers/public";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new LessonScheduleController();

router.get("/lesson-schedules", (res, req) => controller.getPaginatedPosts(res, req));
router.get("/lessons-cut-down-info", (res, req) => controller.getLessonsCutDownInfo(res, req));

export default router;
