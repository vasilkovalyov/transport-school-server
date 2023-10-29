import Joi from "joi";
import { UserLoginType } from "../types/admin";
import { AuthValidation } from "../constants/validation-messages";

const studentRegistrationSchema = Joi.object<UserLoginType>({
  login: Joi.string().required().messages({
    "string.login": AuthValidation.LoginValidation,
  }),
  password: Joi.string()
    .required()
    .message(
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*)",
    ),
});

export default studentRegistrationSchema;
