import express from "express";
import { LessonScheduleController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const lessonScheduleController = new LessonScheduleController();

router.post("/lesson-schedule-create", authMiddleware, (res, req) => lessonScheduleController.create(res, req));
router.patch("/lesson-schedule-update", authMiddleware, (res, req) => lessonScheduleController.update(res, req));
router.delete("/lesson-schedule-delete/:id", authMiddleware, (res, req) => lessonScheduleController.delete(res, req));
router.get("/lesson-schedules", authMiddleware, (res, req) => lessonScheduleController.getPaginatedPosts(res, req));
router.get("/lesson-schedule-students/:id", authMiddleware, (res, req) =>
  lessonScheduleController.getStudents(res, req),
);
router.delete("/lesson-schedule-student", authMiddleware, (res, req) =>
  lessonScheduleController.deleteStudent(res, req),
);
router.get("/lesson-schedules/:id", authMiddleware, (res, req) => lessonScheduleController.getLessonSchedule(res, req));

export default router;
