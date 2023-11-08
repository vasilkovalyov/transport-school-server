import express from "express";
import { LessonController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const lessonController = new LessonController();

router.post("/lesson-schedule-create", authMiddleware, (res, req) => lessonController.create(res, req));
router.patch("/lesson-schedule-update", authMiddleware, (res, req) => lessonController.update(res, req));
router.delete("/lesson-schedule-delete/:id", authMiddleware, (res, req) => lessonController.delete(res, req));
router.get("/lesson-schedules", authMiddleware, (res, req) => lessonController.getLessonsPaginated(res, req));
router.get("/lesson-schedule-students/:id", authMiddleware, (res, req) =>
  lessonController.getAllStudentsFromLesson(res, req),
);
router.delete("/lesson-schedule-student", authMiddleware, (res, req) =>
  lessonController.deleteStudentFromLesson(res, req),
);
router.get("/lesson-schedules/:id", authMiddleware, (res, req) => lessonController.getLesson(res, req));

export default router;
