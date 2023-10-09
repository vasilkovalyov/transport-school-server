import express from "express";
import { CommonContactsController } from "../controllers";
import authMiddleware from "../middlewares/auth";

const router = express.Router();
const controller = new CommonContactsController();

router.post("/contacts", (res, req) => controller.updateContacts(res, req));
router.post("/socials", (res, req) => controller.updateSocial(res, req));
router.get("/contacts", (res, req) => controller.getContacts(res, req));

export default router;
