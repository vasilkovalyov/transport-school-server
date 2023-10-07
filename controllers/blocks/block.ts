import { Request, Response } from "express";

export interface IBlockController {
  create: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
  getBlock: (req: Request, res: Response) => void;
  publish: (req: Request, res: Response) => void;
  unpublish: (req: Request, res: Response) => void;
}

export interface IBlockShortController extends Pick<IBlockController, "publish" | "unpublish" | "getBlock"> {}
