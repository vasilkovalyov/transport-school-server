import express from "express";
import { BlockAchivmentsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockAchivmentsController();

router.post("/block/achivments-create", (req, res) => controller.create(req, res));
router.patch("/block/achivments-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/achivments/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/achivments/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/achivments/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
