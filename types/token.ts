import { Request } from "express";

export type TokenDataType = {
  _id: string;
  exp: number;
};

export type RequestWithAuthUserType = Request & {
  user?: TokenDataType | null;
};
