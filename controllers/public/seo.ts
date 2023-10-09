import { Request, Response } from "express";
import status from "../../utils/status";
import { SeoService } from "../../services/public";

class SeoController {
  service: SeoService;
  constructor() {
    this.service = new SeoService();
  }

  async updateContacts(req: Request, res: Response) {
    try {
      const response = await this.service.update(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      console.log(e);
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getInfo(req: Request, res: Response) {
    try {
      const { page } = req.params;

      const response = await this.service.getInfo(page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default SeoController;
