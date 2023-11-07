import express from "express";
import { BlockTeamEducationController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockTeamEducationController();

router.post("/block/team-education-create", authMiddleware, (req, res) => controller.create(req, res));
router.patch("/block/team-education-update", authMiddleware, (req, res) => controller.update(req, res));
router.get("/blocks/team-education/:page", authMiddleware, (req, res) => controller.getBlock(req, res));
router.patch("/block/team-education/publish", authMiddleware, (req, res) => controller.publish(req, res));
router.patch("/block/team-education/unpublish", authMiddleware, (req, res) => controller.unpublish(req, res));

export default router;
