import express from "express";
import { ReuseBlockContactsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new ReuseBlockContactsController();

router.patch("/block/reuse-contacts", (req, res) => controller.update(req, res));
router.get("/block/reuse-contacts", (req, res) => controller.getBlock(req, res));

export default router;
