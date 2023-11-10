import express from "express";
import { CommonContactsController } from "../../controllers";

const router = express.Router();
const controller = new CommonContactsController();

router.get("/contacts", (res, req) => controller.getFullContacts(res, req));

export default router;
