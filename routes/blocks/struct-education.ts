import express from "express";
import { BlockStructEducationController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockStructEducationController();

router.post("/block/struct-education-create", (req, res) => controller.create(req, res));
router.patch("/block/struct-education-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/struct-education/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/struct-education/publish", (req, res) => controller.publish(req, res));
router.patch("/block/struct-education/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
