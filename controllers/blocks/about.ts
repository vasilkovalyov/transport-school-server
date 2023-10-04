import { Request, Response } from "express";
import status from "../../utils/status";
import { BlockAboutService } from "../../services";

import { IBlockController } from "./block";

class BlockAboutController implements IBlockController {
  blockAboutService: BlockAboutService;

  constructor() {
    this.blockAboutService = new BlockAboutService();
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.blockAboutService.create(req.body);
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
      const response = await this.blockAboutService.update({ ...req.body, _id: req.params.id });
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

      const response = await this.blockAboutService.getBlock(page);
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

      const response = await this.blockAboutService.publish(page);
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

      const response = await this.blockAboutService.unpublish(page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default BlockAboutController;
