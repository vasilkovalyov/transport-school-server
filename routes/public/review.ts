import express from "express";
import { ReviewController } from "../../controllers/public";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new ReviewController();

router.post("/dashboard/review", (res, req) => controller.create(res, req));
router.patch("/dashboard/review", (res, req) => controller.update(res, req));
router.delete("/dashboard/review/:id", (res, req) => controller.delete(res, req));
router.get("/dashboard/review/:id", (res, req) => controller.getReview(res, req));
router.get("/dashboard/reviews", (res, req) => controller.getAll(res, req));

export default router;
