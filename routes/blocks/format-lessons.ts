import express from "express";
import { BlockFormatLessonsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockFormatLessonsController();

router.post("/block/format-lessons-create", (req, res) => controller.create(req, res));
router.patch("/block/format-lessons-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/format-lessons/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/format-lessons/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/format-lessons/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
