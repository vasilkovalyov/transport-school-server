import express from "express";
import { BlockAboutController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockAboutController();

router.post("/block/about-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/about-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/about/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/about/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/about/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
