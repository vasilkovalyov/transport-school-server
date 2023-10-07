import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import {
  authRoute,
  postRoute,
  lessonScheduleRoute,
  serviceRoute,
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
  blockFormatLessonsRoute,
  blockHeroRoute,
  blockRequirementRoute,
  blockReviewsRoute,
  blockScheduleRoute,
  blockServicesRoute,
  blockStructEducationRoute,
  blockTeamEducationRoute,
  blockWhoTeachRoute,
  pageHomeRoute,
} from "./routes";

import databaseConnect from "./database";

(async () => {
  const server: Express = express();
  const PORT = process.env.PORT || 4000;
  dotenv.config();

  server.use(bodyParser.json({ limit: "50mb" }));
  server.use(cors({ credentials: true, origin: ["http://localhost:5173", "http://localhost:3000"] }));
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

  server.use("/api/dashboard", authRoute);
  server.use("/api/dashboard", postRoute);
  server.use("/api/dashboard", serviceRoute);
  server.use("/api/dashboard", lessonScheduleRoute);

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
  server.use("/api/dashboard", blockFormatLessonsRoute);
  server.use("/api/dashboard", blockHeroRoute);
  server.use("/api/dashboard", blockRequirementRoute);
  server.use("/api/dashboard", blockReviewsRoute);
  server.use("/api/dashboard", blockScheduleRoute);
  server.use("/api/dashboard", blockServicesRoute);
  server.use("/api/dashboard", blockStructEducationRoute);
  server.use("/api/dashboard", blockTeamEducationRoute);
  server.use("/api/dashboard", blockWhoTeachRoute);

  server.use("/api", pageHomeRoute);

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
