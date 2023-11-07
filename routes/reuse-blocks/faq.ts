import express from "express";
import { ReuseBlockFaqController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new ReuseBlockFaqController();

router.patch("/block/reuse-faq", authMiddleware, (req, res) => controller.update(req, res));
router.get("/block/reuse-faq", authMiddleware, (req, res) => controller.getBlock(req, res));

export default router;
