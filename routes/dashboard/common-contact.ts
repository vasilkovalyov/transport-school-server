import express from "express";
import { CommonContactsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new CommonContactsController();

router.patch("/contacts", authMiddleware, (res, req) => controller.updateContacts(res, req));
router.patch("/socials", authMiddleware, (res, req) => controller.updateSocial(res, req));
router.get("/contacts", authMiddleware, (res, req) => controller.getContacts(res, req));
router.get("/socials", authMiddleware, (res, req) => controller.getSocials(res, req));

export default router;
