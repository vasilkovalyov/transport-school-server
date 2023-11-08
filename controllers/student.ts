import { Request, Response } from "express";
import status from "../utils/status";
import { StudentService } from "../services";

class StudentController {
  service: StudentService;
  constructor() {
    this.service = new StudentService();
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.service.create(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      console.log(e);
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const response = await this.service.delete(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const response = await this.service.getAll();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      console.log(e);
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getStudent(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const response = await this.service.getStudent(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      console.log(e);
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default StudentController;
