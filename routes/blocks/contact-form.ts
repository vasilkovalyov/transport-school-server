import express from "express";
import { BlockContactFormController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockContactFormController();

router.post("/block/contact-form-create", (req, res) => controller.create(req, res));
router.patch("/block/contact-form-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/contact-form/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/contact-form/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/contact-form/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
