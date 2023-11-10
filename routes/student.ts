import express from "express";
import { StudentController } from "../controllers";
import authMiddleware from "../middlewares/auth";

const router = express.Router();
const controller = new StudentController();

router.patch("/student", (res, req) => controller.create(res, req));
router.get("/student-lessons/:id", (res, req) => controller.create(res, req));
router.delete("/dashboard/student/:id", authMiddleware, (res, req) => controller.delete(res, req));
router.get("/dashboard/student/:id", authMiddleware, (res, req) => controller.getStudent(res, req));
router.get("/dashboard/students", authMiddleware, (res, req) => controller.getAll(res, req));

export default router;
