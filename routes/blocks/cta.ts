import express from "express";
import { BlockCtaController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockCtaController();

router.post("/block/cta-create", (req, res) => controller.create(req, res));
router.patch("/block/cta-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/cta/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/cta/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/cta/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
