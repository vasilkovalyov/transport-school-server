import express from "express";
import { SeoController } from "../../controllers/public";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new SeoController();

router.patch("/dashboard/seo", (res, req) => controller.updateContacts(res, req));
router.get("/dashboard/seo/:page", (res, req) => controller.getInfo(res, req));
router.get("/seo/:page", (res, req) => controller.getInfo(res, req));

export default router;