import { Request, Response } from "express";
import status from "../../utils/status";
import { PostService } from "../../services";

class PostsController {
  service: PostService;
  constructor() {
    this.service = new PostService();
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

  async getPostBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const response = await this.service.getPostBySlug(slug);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default PostsController;
