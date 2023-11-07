import express from "express";
import { BlockBenefitsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockBenefitsController();

router.post("/block/benefits-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/benefits-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/benefits/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/benefits/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/benefits/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
