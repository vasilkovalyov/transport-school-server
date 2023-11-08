import { Request, Response } from "express";
import status from "../../utils/status";
import { LessonService } from "../../services";

class LessonController {
  service: LessonService;
  constructor() {
    this.service = new LessonService();
  }

  async getUpcomingLessons(req: Request, res: Response) {
    try {
      const { size, page } = req.query as unknown as { size: string; page: string };
      const response = await this.service.getUpcomingLessons(parseInt(size), parseInt(page));
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getLessonsPaginated(req: Request, res: Response) {
    try {
      const { size, page } = req.query as unknown as { size: string; page: string };
      const response = await this.service.getLessonsPaginated(parseInt(size), parseInt(page));
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getLessonsForCtaForm(req: Request, res: Response) {
    try {
      const response = await this.service.getLessonsForCtaForm();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default LessonController;
