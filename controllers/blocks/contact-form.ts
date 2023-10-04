import { Request, Response } from "express";
import status from "../../utils/status";
import { BlockContactFormService } from "../../services";

import { IBlockController } from "./block";

class BlockContactFormController implements IBlockController {
  blockContactFormService: BlockContactFormService;

  constructor() {
    this.blockContactFormService = new BlockContactFormService();
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.blockContactFormService.create(req.body);
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
      const response = await this.blockContactFormService.update({ ...req.body, _id: req.params.id });
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

      const response = await this.blockContactFormService.getBlock(page);
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

      const response = await this.blockContactFormService.publish(page);
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

      const response = await this.blockContactFormService.unpublish(page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default BlockContactFormController;
