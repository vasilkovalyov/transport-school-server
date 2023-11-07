import express from "express";
import { LessonScheduleController } from "../../controllers/public";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new LessonScheduleController();

router.get("/lesson-schedules", authMiddleware, (res, req) => controller.getUpcomingPosts(res, req));
router.get("/lessons-form-events", authMiddleware, (res, req) => controller.getLessonsFormEvents(res, req));

export default router;
