import express from "express";
import { BlockCtaController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockCtaController();

router.post("/block/cta-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/cta-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/cta/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/cta/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/cta/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
