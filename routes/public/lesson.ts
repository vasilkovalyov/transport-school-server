import express from "express";
import { LessonController } from "../../controllers/public";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new LessonController();

router.get("/lesson-schedules", authMiddleware, (res, req) => controller.getUpcomingLessons(res, req));
router.get("/lessons-form-events", authMiddleware, (res, req) => controller.getLessonsForCtaForm(res, req));

export default router;
