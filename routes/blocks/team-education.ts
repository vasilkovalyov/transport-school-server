import express from "express";
import { BlockTeamEducationController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const controller = new BlockTeamEducationController();

router.post("/block/team-education-create", (req, res) => controller.create(req, res));
router.patch("/block/team-education-update/:id", (req, res) => controller.update(req, res));
router.get("/blocks/team-education/:page", (req, res) => controller.getBlock(req, res));
router.patch("/block/team-education/publish", (req, res) => controller.publish(req, res));
router.patch("/block/team-education/unpublish", (req, res) => controller.unpublish(req, res));

export default router;
