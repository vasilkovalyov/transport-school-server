import express from "express";
import { BlockHeroController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const blockHeroController = new BlockHeroController();

router.post("/block/hero-create", (req, res) => blockHeroController.create(req, res));
router.patch("/block/hero-update/:id", (req, res) => blockHeroController.update(req, res));
router.get("/blocks/hero/:page", (req, res) => blockHeroController.getBlock(req, res));

export default router;
