import ApiError from "./api-error";
import { UserModel } from "../models";

import bcrypt from "bcrypt";
import TokenService from "./token";
import { AuthMessages } from "../constants/response-messages";
import { UserLoginType } from "../types/admin";

class AuthService {
  async hasAdmin() {
    const admin = await UserModel.find();
    if (!admin.length) {
      return {
        hasAdmin: false,
      };
    }

    return {
      hasAdmin: true,
    };
  }

  async login({ login, password }: UserLoginType) {
    const userModel = await UserModel.findOne({
      login: login,
    });

    if (!userModel) throw ApiError.BadRequestError(AuthMessages.userLoginNotFound);

    const validPass = await bcrypt.compare(password, userModel.password);
    if (!validPass) throw ApiError.BadRequestError(AuthMessages.wrongPassword);

    const token = await TokenService.generateTokens({
      _id: userModel?._id.toString(),
    });

    return {
      _id: userModel._id,
      login: userModel.login,
      token: token.accessToken,
      refreshToken: token.refreshToken,
    };
  }

  async registration({ login, password }: UserLoginType) {
    const userExist = await UserModel.findOne({ login: login });
    if (userExist) throw ApiError.BadRequestError(AuthMessages.userExist);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await new UserModel({
      login: login,
      password: hashedPassword,
    });

    await user.save();

    return {
      message: AuthMessages.userCreated,
    };
  }
}

export default AuthService;
