import jwt from "jsonwebtoken";
import expires from "../utils/expires";

export interface ITokenVerifyResponse {
  _id: string;
  iat: number;
  exp: number;
}

type TokenType = "access" | "refresh";

class TokenService {
  static generateTokens(payload: { _id: string }) {
    return {
      accessToken: this.generateAccessToken(payload._id),
      refreshToken: this.generateRefreshToken(payload._id),
    };
  }

  static generateAccessToken = (userId: string) => {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET || "", { expiresIn: expires.expiresAccessToken });
  };

  static generateRefreshToken = (userId: string) => {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET || "", { expiresIn: expires.expiresRefreshToken });
  };

  static validateToken(token: string, type: TokenType = "access"): ITokenVerifyResponse {
    const tokenString = type === "access" ? process.env.JWT_ACCESS_SECRET : process.env.JWT_REFRESH_SECRET;
    const userData = jwt.verify(token, tokenString || "");
    return userData as ITokenVerifyResponse;
  }
}

export default TokenService;
