import express from "express";
import { BlockAboutUsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockAboutUsController();

router.post("/block/about-us-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/about-us-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/about-us/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/about-us/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/about-us/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
