import express from "express";
import { ReviewController } from "../controllers";
import authMiddleware from "../middlewares/auth";

const router = express.Router();
const controller = new ReviewController();

router.post("/dashboard/review", authMiddleware, (res, req) => controller.create(res, req));
router.patch("/dashboard/review", authMiddleware, (res, req) => controller.update(res, req));
router.delete("/dashboard/review/:id", authMiddleware, (res, req) => controller.delete(res, req));
router.get("/dashboard/review/:id", authMiddleware, (res, req) => controller.getReview(res, req));
router.get("/dashboard/reviews", authMiddleware, (res, req) => controller.getAll(res, req));

export default router;
