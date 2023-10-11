import express from "express";
import { BlockReviewsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockReviewsController();

router.post("/block/review-create", (req, res) => controller.create(req, res));
router.patch("/block/review-update", (req, res) => controller.update(req, res));
router.get("/block/review/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/review/publish", (req, res) => controller.publish(req, res));
router.patch("/block/review/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
