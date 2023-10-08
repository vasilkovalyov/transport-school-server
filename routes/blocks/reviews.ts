import express from "express";
import { BlockReviewsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockReviewsController();

router.post("/block/reviews-create", (req, res) => controller.create(req, res));
router.patch("/block/reviews-update", (req, res) => controller.update(req, res));
router.get("/block/reviews/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/reviews/publish", (req, res) => controller.publish(req, res));
router.patch("/block/reviews/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
