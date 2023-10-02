import { Request, Response } from "express";
import status from "../utils/status";
import { PostService } from "../services";

class PostController {
  postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.postService.create(req.body);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    const postService = new PostService();
    try {
      const response = await postService.update(req.body);
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

      const response = await this.postService.delete(id);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }

  async getPost(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const response = await this.postService.getPost(id);
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
      const { size, page } = req.body;
      const response = await this.postService.getPaginatedPosts(size, page);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default PostController;
