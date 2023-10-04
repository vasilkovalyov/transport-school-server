import express from "express";
import { BlockWhoTeachController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockWhoTeachController();

router.post("/block/who-teach-create", (req, res) => controller.create(req, res));
router.patch("/block/who-teach-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/who-teach/:page", (req, res) => controller.getBlock(req, res));
router.get("/blocks/who-teach/publish", (req, res) => controller.publish(req, res));
router.get("/blocks/who-teach/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
