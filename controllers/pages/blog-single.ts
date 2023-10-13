import { Request, Response } from "express";
import status from "../../utils/status";

import { PageBlogSingleService } from "../../services/pages";

class BlogSingleController {
  async getPage(req: Request, res: Response) {
    const service = new PageBlogSingleService();
    try {
      const response = await service.getPage(req.params.slug);
      return res.status(status.SUCCESS).json(response);
    } catch (e) {
      if (!(e instanceof Error)) return;
      return res.status(status.BAD_REQUEST).json({
        error: e.message,
      });
    }
  }
}

export default BlogSingleController;
