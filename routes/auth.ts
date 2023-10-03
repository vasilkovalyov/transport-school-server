import express from "express";
import { AuthController } from "../controllers";

const router = express.Router();
const authController = new AuthController();

router.post("/login", (req, res) => authController.login(req, res));
router.post("/refresh-token", (req, res) => authController.refreshToken(req, res));
router.post("/registration", (req, res) => authController.registration(req, res));

export default router;
