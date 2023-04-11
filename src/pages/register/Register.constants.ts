import { object, string } from "yup";

import { IRegFormValues } from "./Register.types";

// TODO: add repeat password field in order to help use to avoid make some mistake
export const RegisterSchema = object().shape({
  email: string().email("Invalid email").required("Required"),
  username: string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  password: string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});

export const regFormInitValues: IRegFormValues = {
  email: "",
  username: "",
  password: "",
};
