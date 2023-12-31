import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

import {
  dashboardAuthRoute,
  dashboardPostRoute,
  dashboardLessonRoute,
  dashboardServiceRoute,
  dashboardOverviewRoute,
  dashboardCommonContactRoute,
} from "./routes/dashboard";

import { commonContactRoute, postsRoute, lessonRoute } from "./routes/public";

import { seoRoute, studentRoute, pagesRoute, reviewRoute } from "./routes";

import {
  reuseBlockAchivmentsRoute,
  reuseBlockContactsRoute,
  reuseBlockCtaRoute,
  reuseBlockFaqRoute,
  reuseBlockReviewRoute,
} from "./routes/reuse-blocks";

import {
  blockAboutRoute,
  blockAboutCourseRoute,
  blockAboutUsRoute,
  blockAchivmentsRoute,
  blockBenefitsRoute,
  blockBlogRoute,
  blockContactFormRoute,
  blockContactsRoute,
  blockCourseForPeopleRoute,
  blockCtaRoute,
  blockFaqRoute,
  blockFormatLessonsRoute,
  blockHeroRoute,
  blockRequirementRoute,
  blockReviewsRoute,
  blockScheduleRoute,
  blockStructEducationRoute,
  blockTeamEducationRoute,
  blockWhoTeachRoute,
} from "./routes/blocks";

import databaseConnect from "./database";

(async () => {
  const server: Express = express();
  const PORT = process.env.PORT || 4000;
  const WEBSITE_URL = process.env.WEBSITE_API_URL || "http://localhost:3000";
  const ADMIN_API_URL = process.env.ADMIN_API_URL || "http://localhost:5173";

  dotenv.config();

  server.use(bodyParser.json({ limit: "50mb" }));
  server.use(
    cors({
      credentials: true,
      origin: [WEBSITE_URL, ADMIN_API_URL],
    }),
  );
  server.use(express.urlencoded({ extended: true }));
  server.use(compression());
  server.use(cookieParser());
  server.use(express.json());
  server.use(
    fileUpload({
      useTempFiles: true,
      limits: { fileSize: 50 * 1024 * 1024 },
    }),
  );

  server.get("/", (req, res) => {
    return res.json({
      message: "node js message",
    });
  });

  server.use("/api/dashboard", dashboardAuthRoute);
  server.use("/api/dashboard", dashboardPostRoute);
  server.use("/api/dashboard", dashboardServiceRoute);
  server.use("/api/dashboard", dashboardLessonRoute);
  server.use("/api/dashboard", dashboardCommonContactRoute);
  server.use("/api/dashboard", dashboardOverviewRoute);

  server.use("/api/dashboard", blockAboutRoute);
  server.use("/api/dashboard", blockAboutCourseRoute);
  server.use("/api/dashboard", blockAboutUsRoute);
  server.use("/api/dashboard", blockAchivmentsRoute);
  server.use("/api/dashboard", blockBenefitsRoute);
  server.use("/api/dashboard", blockBlogRoute);
  server.use("/api/dashboard", blockContactFormRoute);
  server.use("/api/dashboard", blockContactsRoute);
  server.use("/api/dashboard", blockCourseForPeopleRoute);
  server.use("/api/dashboard", blockCtaRoute);
  server.use("/api/dashboard", blockFaqRoute);
  server.use("/api/dashboard", blockFormatLessonsRoute);
  server.use("/api/dashboard", blockHeroRoute);
  server.use("/api/dashboard", blockRequirementRoute);
  server.use("/api/dashboard", blockReviewsRoute);
  server.use("/api/dashboard", blockScheduleRoute);
  server.use("/api/dashboard", blockStructEducationRoute);
  server.use("/api/dashboard", blockTeamEducationRoute);
  server.use("/api/dashboard", blockWhoTeachRoute);

  server.use("/api/dashboard", reuseBlockAchivmentsRoute);
  server.use("/api/dashboard", reuseBlockContactsRoute);
  server.use("/api/dashboard", reuseBlockCtaRoute);
  server.use("/api/dashboard", reuseBlockFaqRoute);
  server.use("/api/dashboard", reuseBlockReviewRoute);

  server.use("/api", seoRoute);
  server.use("/api", reviewRoute);
  server.use("/api", postsRoute);
  server.use("/api", lessonRoute);
  server.use("/api", studentRoute);

  server.use("/api", pagesRoute);

  server.use("/api", commonContactRoute);

  try {
    databaseConnect()
      .then((response) => {
        server.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
      })
      .catch((e) => console.log(e));
  } catch (e) {
    process.exit(1);
  }
})();
