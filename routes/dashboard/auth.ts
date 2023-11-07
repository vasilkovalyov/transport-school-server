import express from "express";
import { AuthController } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();
const authController = new AuthController();

router.post("/login", (req, res) => authController.login(req, res));
router.get("/has-admin", (req, res) => authController.hasAdmin(req, res));
router.post("/refresh-token", (req, res) => authController.refreshToken(req, res));
router.post("/registration", (req, res) => authController.registration(req, res));

export default router;
