import express from "express";
import { BlockServicesController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockServicesController();

router.post("/block/services-create", (req, res) => controller.create(req, res));
router.patch("/block/services-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/services/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/services/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/services/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
