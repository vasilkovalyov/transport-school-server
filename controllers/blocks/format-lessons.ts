import { Request, Response } from "express";
import status from "../../utils/status";
import { BlockFormatLessonsService } from "../../services";

import { IBlockController } from "./block";

class BlockFormatLessonsController implements IBlockController {
  blockFormatLessonsService: BlockFormatLessonsService;

  constructor() {
    this.blockFormatLessonsService = new BlockFormatLessonsService();
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.blockFormatLessonsService.create(req.body);
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
      const response = await this.blockFormatLessonsService.update(req.body);
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

      const response = await this.blockFormatLessonsService.getBlock(page);
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

      const response = await this.blockFormatLessonsService.publish(page);
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

      const response = await this.blockFormatLessonsService.unpublish(page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default BlockFormatLessonsController;
