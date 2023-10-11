import express from "express";
import { BlockFaqController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockFaqController();

router.post("/block/faq-create", (req, res) => controller.create(req, res));
router.patch("/block/faq-update", (req, res) => controller.update(req, res));
router.get("/blocks/faq/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/faq/publish", (req, res) => controller.publish(req, res));
router.patch("/block/faq/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
