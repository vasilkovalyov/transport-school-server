import express from "express";
import { ReuseBlockAchivmentsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new ReuseBlockAchivmentsController();

router.patch("/block/reuse-achivments", authMiddleware, (req, res) => controller.update(req, res));
router.get("/block/reuse-achivments", authMiddleware, (req, res) => controller.getBlock(req, res));

export default router;
