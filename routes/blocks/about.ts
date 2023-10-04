import express from "express";
import { BlockAboutController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockAboutController();

router.post("/block/about-create", (req, res) => controller.create(req, res));
router.patch("/block/about-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/about/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/about/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/about/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
