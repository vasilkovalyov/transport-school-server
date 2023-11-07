import { Request, Response } from "express";

import { TokenService, AuthService, ApiError } from "../services";
import status from "../utils/status";
import { AuthMessages } from "../constants/response-messages";

class AuthController {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async hasAdmin(req: Request, res: Response) {
    try {
      const response = await this.authService.hasAdmin();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const response = await this.authService.login(req.body);
      if (response) {
        res.cookie("refreshToken", response.refreshToken, {
          domain: process.env.DOMAIN,
          path: "/",
          secure: true,
        });
        res.cookie("token", response.token, {
          domain: process.env.DOMAIN,
          path: "/",
          secure: false,
        });
      }
      const { refreshToken, ...params } = response;

      return res.status(status.SUCCESS).json(params);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async registration(req: Request, res: Response) {
    try {
      const response = await this.authService.registration(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const refreshToken = req.cookies["refreshToken"];

      if (!refreshToken) throw ApiError.BadRequestError(AuthMessages.problemWithToken);

      const tokenData = TokenService.validateToken(refreshToken, "refresh");
      if (!tokenData) throw ApiError.BadRequestError(AuthMessages.problemWithToken);

      const tokensData = TokenService.generateTokens({
        _id: tokenData._id,
      });

      if (!tokensData) {
        throw new Error("Error token");
      }

      res.cookie("refreshToken", tokensData.refreshToken, {
        domain: process.env.DOMAIN,
        path: "/",
        secure: false,
      });
      res.cookie("token", tokensData.accessToken, {
        domain: process.env.DOMAIN,
        path: "/",
        secure: false,
      });

      return res.status(status.SUCCESS).json({
        token: tokensData.accessToken,
      });
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
        message: "Refresh token expired",
      });
    }
  }
}

export default AuthController;
