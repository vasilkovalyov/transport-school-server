import { Request, Response } from "express";
import status from "../../utils/status";
import { ReuseBlockCtaService } from "../../services/reuse-blocks";

class ReuseBlockCtaController {
  service: ReuseBlockCtaService;
  constructor() {
    this.service = new ReuseBlockCtaService();
  }

  async update(req: Request, res: Response) {
    try {
      const response = await this.service.update(req.body);
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

      const response = await this.service.getBlock(page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default ReuseBlockCtaController;
