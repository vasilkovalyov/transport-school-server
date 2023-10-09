import express from "express";
import { CommonContactsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new CommonContactsController();

router.patch("/contacts", (res, req) => controller.updateContacts(res, req));
router.patch("/socials", (res, req) => controller.updateSocial(res, req));
router.get("/contacts", (res, req) => controller.getContacts(res, req));
router.get("/socials", (res, req) => controller.getSocials(res, req));

export default router;
