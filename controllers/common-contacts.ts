import { Request, Response } from "express";
import status from "../utils/status";
import { CommonContactsService } from "../services";

class CommonContactsController {
  service: CommonContactsService;
  constructor() {
    this.service = new CommonContactsService();
  }
  async updateContacts(req: Request, res: Response) {
    try {
      const response = await this.service.updateContacts(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      console.log(e);
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async updateSocial(req: Request, res: Response) {
    try {
      const response = await this.service.updateSocial(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      console.log(e);
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getContacts(req: Request, res: Response) {
    try {
      const response = await this.service.getContacts();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getSocials(req: Request, res: Response) {
    try {
      const response = await this.service.getSocials();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getFullContacts(req: Request, res: Response) {
    try {
      const response = await this.service.getFullContacts();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default CommonContactsController;
