import express from "express";
import AuthController from "../../controllers/admin/auth";

const router = express.Router();
const authController = new AuthController();

router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);
router.post("/registration", authController.registration);

export default router;
