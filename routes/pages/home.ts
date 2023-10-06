import express from "express";
import { PageHomeController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PageHomeController();

router.get("/page/home", (req, res) => controller.getPage(req, res));

export default router;
