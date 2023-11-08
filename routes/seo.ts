import express from "express";
import { SeoController } from "../controllers";
import authMiddleware from "../middlewares/auth";

const router = express.Router();
const controller = new SeoController();

router.patch("/dashboard/seo", authMiddleware, (res, req) => controller.updateContacts(res, req));
router.get("/dashboard/seo/:page", authMiddleware, (res, req) => controller.getInfo(res, req));
router.get("/seo/:page", authMiddleware, (res, req) => controller.getInfo(res, req));

export default router;
