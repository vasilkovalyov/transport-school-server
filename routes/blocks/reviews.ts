import express from "express";
import { BlockReviewsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockReviewsController();

router.post("/block/review-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/review-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/block/review/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/review/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/review/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
