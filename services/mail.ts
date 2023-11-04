import nodemailer from "nodemailer";
import dayjs from "dayjs";

import { LessonScheduleType, StudentType } from "../models";
import { lessonType } from "../utils/common";
import { shortDayNames } from "../utils/days";

export type StudentEmailProps = Pick<
  LessonScheduleType,
  "heading" | "date_start_event" | "days" | "time_start" | "time_end" | "type_group" | "type_lesson"
> &
  Pick<StudentType, "name">;

class MailService {
  private subject: string;
  private from: string;

  constructor() {
    this.subject = "Transport business school";
    this.from = process.env.GMAIL_LOGIN || "";
  }

  studentLessonRegistration(student: StudentEmailProps): string {
    const { name, heading, date_start_event, days, time_end, time_start, type_group, type_lesson } = student;
    return `
      <h3>Dear ${name}</h3>
        <h4>Thanks you for registered on lesson</h4>
        <h3>Название урока - ${heading}</h3>
        <ul>
          <li>
            <p><strong>Дата начала - </strong> ${dayjs(date_start_event).format("DD MMMM YYYY")}</p>
          </li>
          <li>
            <p><strong>Время: </strong> ${time_start} - ${time_end}</p>
          </li>
          <li>
            <p><strong>Дни уроков - </strong> ${days.map(
              (day, index) => `${shortDayNames[day].name}${days.length < index ? ", " : " "}`,
            )}</p>
          </li>
          <li>
            <p><strong>Группа - </strong> ${type_group}</p>
          </li>
          <li>
            <p><strong>Тип урока - </strong>${lessonType[type_lesson]}</p>
          </li>
        </ul>
    `;
  }

  sendMailStudentRegistrationOnLesson(to: string, student: StudentEmailProps) {
    const body = {
      from: this.from,
      to: to,
      subject: this.subject,
      html: this.studentLessonRegistration(student),
    };

    return this.sendMail(body);
  }

  private async sendMail(message: object) {
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
      transporter.sendMail(message, function (err, info) {
        if (err) {
          rej(err);
          throw new Error(err);
        } else {
          res(info);
        }
      });
    });
  }
}

export default MailService;
