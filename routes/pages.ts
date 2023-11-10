import express from "express";

import {
  PageAboutCourseController,
  PageBlogSingleController,
  PageBlogController,
  PageCompanyController,
  PageContactController,
  PageHomeController,
  PagePriceController,
  PageScheduleController,
} from "../controllers";

const router = express.Router();

const controllerPageAboutCourse = new PageAboutCourseController();
const controllerPageBlogSingle = new PageBlogSingleController();
const controllerPageBlog = new PageBlogController();
const controllerPageCompany = new PageCompanyController();
const controllerPageContact = new PageContactController();
const controllerPageHome = new PageHomeController();
const controllerPagePrice = new PagePriceController();
const controllerPageSchedule = new PageScheduleController();

router.get("/page/about-course", (req, res) => controllerPageAboutCourse.getPage(req, res));
router.get("/page/blog/:slug", (req, res) => controllerPageBlogSingle.getPage(req, res));
router.get("/page/blog", (req, res) => controllerPageBlog.getPage(req, res));
router.get("/page/company", (req, res) => controllerPageCompany.getPage(req, res));
router.get("/page/contact", (req, res) => controllerPageContact.getPage(req, res));
router.get("/page/home", (req, res) => controllerPageHome.getPage(req, res));
router.get("/page/price", (req, res) => controllerPagePrice.getPage(req, res));
router.get("/page/schedule", (req, res) => controllerPageSchedule.getPage(req, res));

export default router;
