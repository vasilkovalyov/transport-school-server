import express from "express";
import { BlockContactsController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockContactsController();

router.post("/block/contacts-create", (req, res) => controller.create(req, res));
router.patch("/block/contacts-update", (req, res) => controller.update(req, res));
router.get("/blocks/contacts/:page", (req, res) => controller.getBlock(req, res));
router.patch("/blocks/contacts/publish", (req, res) => controller.publish(req, res));
router.patch("/blocks/contacts/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
