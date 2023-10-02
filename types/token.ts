import { Request } from "express";

export interface ITokenData {
  _id: string;
  exp: number;
}

export interface RequestWithAuthUser extends Request {
  user?: ITokenData | null;
}
