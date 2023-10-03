import { Request, Response } from "express";
import status from "../utils/status";
import { LessonScheduleService } from "../services";

class LessonScheduleController {
  lessonScheduleService: LessonScheduleService;

  constructor() {
    this.lessonScheduleService = new LessonScheduleService();
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.lessonScheduleService.create(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      console.log(e);
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const response = await this.lessonScheduleService.update(req.body);
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

      const response = await this.lessonScheduleService.delete(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getLessonSchedule(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const response = await this.lessonScheduleService.getLessonSchedule(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getLessonSchedules(req: Request, res: Response) {
    try {
      const response = await this.lessonScheduleService.getLessonSchedules();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default LessonScheduleController;
