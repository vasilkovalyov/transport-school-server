import express from "express";
import { BlockBenefitsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockBenefitsController();

router.post("/block/benefits-create", (req, res) => controller.create(req, res));
router.patch("/block/benefits-update", (req, res) => controller.update(req, res));
router.get("/blocks/benefits/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/benefits/publish", (req, res) => controller.publish(req, res));
router.patch("/block/benefits/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
