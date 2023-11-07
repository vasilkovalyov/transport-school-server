import express from "express";
import { BlockHeroController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockHeroController();

router.post("/block/hero-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/hero-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/hero/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/hero/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/hero/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
