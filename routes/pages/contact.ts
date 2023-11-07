import express from "express";
import { PageContactController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PageContactController();

router.get("/page/contact", authMiddleware, (req, res) => controller.getPage(req, res));

export default router;
