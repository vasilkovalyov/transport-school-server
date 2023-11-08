import express from "express";
import { StudentController } from "../controllers";
import authMiddleware from "../middlewares/auth";

const router = express.Router();
const controller = new StudentController();

router.patch("/student", (res, req) => controller.create(res, req));
router.get("/students", authMiddleware, (res, req) => controller.getAll(res, req));

export default router;
