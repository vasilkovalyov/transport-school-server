import express from "express";
import { OverviewController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const overviewController = new OverviewController();

router.get("/overview-info", authMiddleware, (res, req) => overviewController.getInfo(res, req));
router.get("/overview-upcoming-events", authMiddleware, (res, req) => overviewController.getUpcomingEvents(res, req));

export default router;
