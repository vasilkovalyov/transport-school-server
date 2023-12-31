import { Request, Response } from "express";
import status from "../../utils/status";

import { PageBlogService } from "../../services/pages";

class BlogController {
  async getPage(req: Request, res: Response) {
    const service = new PageBlogService();
    try {
      const response = await service.getPage();
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default BlogController;
