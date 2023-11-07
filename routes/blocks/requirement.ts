import express from "express";
import { BlockRequirementController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockRequirementController();

router.post("/block/requirement-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/requirement-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/requirement/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/requirement/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/requirement/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
