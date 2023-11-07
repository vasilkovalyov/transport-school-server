import express from "express";
import { BlockContactsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockContactsController();

router.post("/block/contacts-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/contacts-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/block/contacts/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/contacts/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/contacts/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
