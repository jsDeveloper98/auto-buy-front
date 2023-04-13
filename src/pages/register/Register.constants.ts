import { object, string } from "yup";

import { IRegFormValues } from "./Register.types";
import { INPUT_TYPE_MIN_LENGTH, INPUT_TYPE_MAX_LENGTH } from "../../constants";

export const RegisterSchema = object().shape({
  email: string().email("Invalid email").required("Required"),
  username: string()
    .min(INPUT_TYPE_MIN_LENGTH, "Too short!")
    .max(INPUT_TYPE_MAX_LENGTH, "Too long!")
    .required("Required"),
  password: string()
    .min(INPUT_TYPE_MIN_LENGTH, "Too short!")
    .max(INPUT_TYPE_MAX_LENGTH, "Too long!")
    .required("Required"),
});

export const regFormInitValues: IRegFormValues = {
  email: "",
  username: "",
  password: "",
};
