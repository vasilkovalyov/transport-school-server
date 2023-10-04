import express from "express";
import { BlockHeroController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockHeroController();

router.post("/block/hero-create", (req, res) => controller.create(req, res));
router.patch("/block/hero-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/hero/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/hero/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/hero/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
