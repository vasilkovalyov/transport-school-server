import express from "express";
import { BlockAboutUsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockAboutUsController();

router.post("/block/about-us-create", (req, res) => controller.create(req, res));
router.patch("/block/about-us-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/about-us/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/about-us/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/about-us/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
