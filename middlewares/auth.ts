import { Response, NextFunction } from "express";
import { TokenService } from "../services";
import { ITokenData, RequestWithAuthUser } from "../types/token";
import status from "../utils/status";
import { AuthMessages } from "../constants/response-messages";

export default async function (req: RequestWithAuthUser, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(status.UNAUTHORIZED).json({ message: AuthMessages.unauthorized });
    }

    const userData = await TokenService.validateToken(token);

    if (!userData) {
      return res.status(status.BAD_REQUEST).json({ message: AuthMessages.destroyedToken });
    }
    req.user = userData as ITokenData;

    return next();
  } catch (err) {
    return res.status(status.UNAUTHORIZED).json({ message: AuthMessages.unauthorized });
  }
}
