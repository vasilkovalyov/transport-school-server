import { Request, Response } from "express";
import status from "../utils/status";
import { Service } from "../services";

class ServiceController {
  Service: Service;

  constructor() {
    this.Service = new Service();
  }

  async create(req: Request, res: Response) {
    try {
      console.log(req.body);
      const response = await this.Service.create(req.body);
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
      const response = await this.Service.update({ ...req.body, _id: req.params.id });
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const response = await this.Service.delete(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getService(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const response = await this.Service.getService(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getServices(req: Request, res: Response) {
    try {
      const response = await this.Service.getServices();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default ServiceController;
