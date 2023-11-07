import express from "express";
import { BlockAchivmentsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockAchivmentsController();

router.post("/block/achivments-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/achivments-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/achivments/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/achivments/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/achivments/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
