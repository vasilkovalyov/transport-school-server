import { Request, Response } from "express";
import status from "../../utils/status";
import { BlockHeroService } from "../../services";

import { IBlockController } from "./block";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

class PostController implements IBlockController {
  blockHeroService: BlockHeroService;

  constructor() {
    this.blockHeroService = new BlockHeroService();
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.blockHeroService.create(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const response = await this.blockHeroService.update(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getBlock(req: Request, res: Response) {
    try {
      const { page } = req.params;

      const response = await this.blockHeroService.getBlock(page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async publish(req: Request, res: Response) {
    try {
      const { page } = req.body;

      const response = await this.blockHeroService.publish(page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async unpublish(req: Request, res: Response) {
    try {
      const { page } = req.body;

      const response = await this.blockHeroService.unpublish(page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default PostController;
