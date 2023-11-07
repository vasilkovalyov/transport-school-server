import express from "express";
import { ServiceController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const serviceController = new ServiceController();

router.post("/service-create", authMiddleware, (req, res) => serviceController.create(req, res));
router.patch("/service-update", authMiddleware, (req, res) => serviceController.update(req, res));
router.delete("/service-delete/:id", authMiddleware, (req, res) => serviceController.delete(req, res));
router.get("/services", authMiddleware, (req, res) => serviceController.getServices(req, res));
router.get("/services/:id", authMiddleware, (req, res) => serviceController.getService(req, res));

export default router;
