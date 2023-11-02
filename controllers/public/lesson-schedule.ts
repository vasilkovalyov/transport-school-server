import { Request, Response } from "express";
import status from "../../utils/status";
import { LessonScheduleService } from "../../services";

class LessonScheduleController {
  service: LessonScheduleService;
  constructor() {
    this.service = new LessonScheduleService();
  }

  async getPaginatedPosts(req: Request, res: Response) {
    try {
      const { size, page } = req.query as unknown as { size: string; page: string };
      const response = await this.service.getPaginatedPosts(parseInt(size), parseInt(page));
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getLessonsCutDownInfo(req: Request, res: Response) {
    try {
      const response = await this.service.getLessonsCutDownInfo();
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
