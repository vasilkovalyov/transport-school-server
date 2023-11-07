import express from "express";
import { BlockContactFormController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockContactFormController();

router.post("/block/contact-form-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/contact-form-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/contact-form/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/contact-form/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/contact-form/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
