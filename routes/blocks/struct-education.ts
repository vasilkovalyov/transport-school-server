import express from "express";
import { BlockStructEducationController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockStructEducationController();

router.post("/block/struct-education-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/struct-education-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/struct-education/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/struct-education/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/struct-education/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
