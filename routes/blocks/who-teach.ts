import express from "express";
import { BlockWhoTeachController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockWhoTeachController();

router.post("/block/who-teach-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/who-teach-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/who-teach/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/who-teach/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/who-teach/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
