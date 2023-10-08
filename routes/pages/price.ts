import express from "express";
import { PagePriceController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new PagePriceController();

router.get("/page/price", (req, res) => controller.getPage(req, res));

export default router;
