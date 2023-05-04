import { object, string } from "yup";

import { ILoginFormValues } from "./LoginForm.types";
import { INPUT_TYPE_MIN_LENGTH, INPUT_TYPE_MAX_LENGTH } from "../../constants";

export const LoginSchema = object().shape({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(INPUT_TYPE_MIN_LENGTH, "Too short!")
    .max(INPUT_TYPE_MAX_LENGTH, "Too long!")
    .required("Required"),
});

export const loginFormInitValues: ILoginFormValues = {
  email: "",
  password: "",
};
