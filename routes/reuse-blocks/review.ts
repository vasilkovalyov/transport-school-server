import express from "express";
import { ReuseBlockReviewController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new ReuseBlockReviewController();

router.patch("/block/reuse-review", (req, res) => controller.update(req, res));
router.get("/block/reuse-review", (req, res) => controller.getBlock(req, res));

export default router;