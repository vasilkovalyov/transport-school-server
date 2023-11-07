import express from "express";
import { PageCompanyController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PageCompanyController();

router.get("/page/company", authMiddleware, (req, res) => controller.getPage(req, res));

export default router;
