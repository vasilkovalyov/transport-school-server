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

  async getPaginatedPosts(req: Request, res: Response) {
    try {
      const { size, page } = req.query as unknown as { size: string; page: string };
      const response = await this.lessonScheduleService.getPaginatedPosts(parseInt(size), parseInt(page));
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getStudents(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response = await this.lessonScheduleService.getStudents(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async deleteStudent(req: Request, res: Response) {
    try {
      const { id_lesson, id_student } = req.query;
      if (id_lesson && id_student) {
        const response = await this.lessonScheduleService.deleteStudent(id_lesson as string, id_student as string);
        return res.status(status.SUCCESS).json(response);
      }
      throw new Error("You have to add id_student and id_lesson");
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default LessonScheduleController;
