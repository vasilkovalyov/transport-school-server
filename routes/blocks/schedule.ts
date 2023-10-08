import express from "express";
import { BlockScheduleController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockScheduleController();

router.post("/block/schedule-create", (req, res) => controller.create(req, res));
router.patch("/block/schedule-update", (req, res) => controller.update(req, res));
router.get("/blocks/schedule/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/schedule/publish", (req, res) => controller.publish(req, res));
router.patch("/block/schedule/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
