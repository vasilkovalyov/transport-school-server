import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenService, AuthService, ApiError } from "../../services";
import status from "../../utils/status";
import { AuthMessages } from "../../constants/response-messages";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const response = await AuthService.login(req.body);
      if (response) {
        res.cookie("token", response.token, {
          domain: process.env.DOMAIN,
          path: "/",
          secure: false,
        });
        res.cookie("_id", response._id.toString(), {
          domain: process.env.DOMAIN,
          path: "/",
          secure: false,
        });
      }
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async registration(req: Request, res: Response) {
    try {
      const response = await AuthService.registration(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async refreshToken(req: Request, res: Response) {
    const refreshToken = req.headers.authorization;

    if (!refreshToken) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    try {
      const tokenData = TokenService.validateToken(refreshToken, "refresh");
      if (!tokenData) throw ApiError.BadRequestError(AuthMessages.problemWithToken);
      const tokensData = TokenService.generateTokens({
        _id: tokenData._id,
      });
      res.json(tokensData);
    } catch (e) {
      if (e instanceof Error) {
        return res.status(status.BAD_REQUEST).json({
          error: e.message,
        });
      }
    }

    // jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || "", (err, decoded) => {
    //   if (err) {
    //     return res.sendStatus(403);
    //   }

    //   console.log("decoded", decoded);

    //   res.json({ decoded: decoded });
    // });

    // if (!tokenData) {
    //   return res.sendStatus(403);
    // }
    return "1";

    // jwt.verify(refreshToken, secretKey, (err, decoded) => {
    //   if (err) {

    //   }

    //   const accessToken = generateAccessToken(decoded.userId);
    //   res.json({ accessToken });
    // });
  }
}

export default AuthController;
