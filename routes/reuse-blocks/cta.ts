import express from "express";
import { ReuseBlockCtaController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new ReuseBlockCtaController();

router.patch("/block/reuse-cta", authMiddleware, (req, res) => controller.update(req, res));
router.get("/block/reuse-cta", authMiddleware, (req, res) => controller.getBlock(req, res));

export default router;
