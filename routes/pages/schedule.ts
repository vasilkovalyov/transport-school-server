import express from "express";
import { PageScheduleController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PageScheduleController();

router.get("/page/schedule", (req, res) => controller.getPage(req, res));

export default router;
