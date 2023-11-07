import express from "express";
import { CommonContactsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new CommonContactsController();

router.get("/contacts", authMiddleware, (res, req) => controller.getFullContacts(res, req));

export default router;
