import { object, string } from "yup";

import { RegFormValues } from "./Register.types";

export const RegisterSchema = object().shape({
  email: string().email("Invalid email").required("Required"),
  username: string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  password: string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});

export const regFormInitValues: RegFormValues = {
  email: "",
  username: "",
  password: "",
};
