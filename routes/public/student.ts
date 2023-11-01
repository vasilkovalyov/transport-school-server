import express from "express";
import { StudentController } from "../../controllers/public";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new StudentController();

router.patch("/student", (res, req) => controller.create(res, req));
router.get("/students", (res, req) => controller.getAll(res, req));

export default router;
