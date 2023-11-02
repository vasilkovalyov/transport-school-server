import express from "express";
import { OverviewController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const overviewController = new OverviewController();

router.get("/overview-info", (res, req) => overviewController.getInfo(res, req));
router.get("/overview-upcoming-events", (res, req) => overviewController.getUpcomingEvents(res, req));

export default router;
