import express from "express";
import { BlockRequirementController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockRequirementController();

router.post("/block/requirement-create", (req, res) => controller.create(req, res));
router.patch("/block/requirement-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/requirement/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/requirement/publish", (req, res) => controller.publish(req, res));
router.patch("/block/requirement/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
