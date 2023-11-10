import { Request, Response } from "express";
import status from "../utils/status";
import { LessonService } from "../services";

class LessonController {
  lessonService: LessonService;

  constructor() {
    this.lessonService = new LessonService();
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.lessonService.create(req.body);
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
      const response = await this.lessonService.update(req.body);
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

      const response = await this.lessonService.delete(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getLesson(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response = await this.lessonService.getLesson(id);
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
      const response = await this.lessonService.getLessonsPaginated(parseInt(size), parseInt(page));
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getLessonsForStudentPaginated(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { size, page } = req.query as unknown as { size: string; page: string };
      const response = await this.lessonService.getLessonsForStudentPaginated(id, parseInt(size), parseInt(page));
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getAllStudentsFromLesson(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response = await this.lessonService.getAllStudentsFromLesson(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async deleteStudentFromLesson(req: Request, res: Response) {
    try {
      const { id_lesson, id_student } = req.query;
      if (id_lesson && id_student) {
        const response = await this.lessonService.deleteStudentFromLesson(id_lesson as string, id_student as string);
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

export default LessonController;
