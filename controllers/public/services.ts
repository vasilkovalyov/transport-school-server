import { Request, Response } from "express";
import status from "../../utils/status";
import { ServiceServices } from "../../services";

class ServicesController {
  service: ServiceServices;
  constructor() {
    this.service = new ServiceServices();
  }

  async getPosts(req: Request, res: Response) {
    try {
      const response = await this.service.getServices();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default ServicesController;
