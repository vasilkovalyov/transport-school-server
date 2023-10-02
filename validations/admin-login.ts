import Joi from "joi";
import { IUserLogin } from "../types/admin";
import { AuthValidation } from "../constants/validation-messages";
// import { passwordRegex } from "./password";

const studentRegistrationSchema = Joi.object<IUserLogin>({
  login: Joi.string().required().messages({
    "string.login": AuthValidation.LoginValidation,
  }),
  password: Joi.string()
    .required()
    // .pattern(new RegExp(passwordRegex))
    .message(
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*)",
    ),
});

export default studentRegistrationSchema;
