import nodemailer from "nodemailer";
import { LessonScheduleType, StudentType } from "./models";

type EmailLessonInfoType = Pick<
  LessonScheduleType,
  "heading" | "date_start_event" | "days" | "time_start" | "time_end" | "type_group" | "type_lesson"
>;

type EmailPayloadType = {
  user: Pick<StudentType, "name" | "email">;
  lesson: EmailLessonInfoType;
};

export function sendSuccessGetLessonEmail({ user, lesson }: EmailPayloadType) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: process.env.GMAIL_LOGIN,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    const message = {
      from: process.env.GMAIL_LOGIN,
      to: user.email,
      subject: "Learn Platform",
      html: `
        <h3>Dear ${user.name}</h3>
        <p>Thanks you for registered on lesson</p>
        <p>You application team</p>
        <h6>${lesson.heading}</h6>
        <ul>
          <li>${lesson.date_start_event}</li>
          <li>${lesson.time_start} - ${lesson.time_start}</li>
          <li>${lesson.days.map((day) => `${day}, `)}</li>
          <li>
            <p>${lesson.type_group}</p>
          </li>
          <li>
            <p>${lesson.type_lesson}</p>
          </li>
        </ul>
      `,
    };
    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
}
