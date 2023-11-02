import { Request, Response } from "express";
import status from "../utils/status";
import { OverviewService } from "../services";

class OverviewController {
  service: OverviewService;

  constructor() {
    this.service = new OverviewService();
  }

  async getInfo(req: Request, res: Response) {
    try {
      const response = await this.service.getInfo();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getUpcomingEvents(req: Request, res: Response) {
    try {
      const response = await this.service.getUpcomingEvents();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default OverviewController;
