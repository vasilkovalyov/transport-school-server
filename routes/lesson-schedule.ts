import express from "express";
import { LessonScheduleController } from "../controllers";
import authMiddleware from "../middlewares/auth";

const router = express.Router();
const lessonScheduleController = new LessonScheduleController();

router.post("/lesson-schedule-create", (res, req) => lessonScheduleController.create(res, req));
router.patch("/lesson-schedule-update/:id", (res, req) => lessonScheduleController.update(res, req));
router.delete("/lesson-schedule-delete/:id", (res, req) => lessonScheduleController.delete(res, req));
router.get("/lesson-schedules", (res, req) => lessonScheduleController.getLessonSchedules(res, req));
router.get("/lesson-schedules/:id", (res, req) => lessonScheduleController.getLessonSchedules(res, req));

export default router;
