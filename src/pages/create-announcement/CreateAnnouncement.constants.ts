import { mixed, number, object, string } from "yup";

import { IAnnouncementFormValues } from "./CreateAnnouncement.types";
import {
  INPUT_TYPE_MAX_LENGTH,
  INPUT_TYPE_MIN_LENGTH,
  TEXTAREA_TYPE_MIN_LENGTH,
  TEXTAREA_TYPE_MAX_LENGTH,
} from "../../constants";

export const AnnouncementSchema = object().shape({
  files: mixed().required("Required"),
  make: string().required("Required"),
  year: number().required("Required"),
  model: string().required("Required"),
  price: number().nullable("Field supports only number"),
  title: string()
    .min(INPUT_TYPE_MIN_LENGTH, "Too Short!")
    .max(INPUT_TYPE_MAX_LENGTH, "Too Long!")
    .required("Required"),
  description: string()
    .min(TEXTAREA_TYPE_MIN_LENGTH, "Too Short!")
    .max(TEXTAREA_TYPE_MAX_LENGTH, "Too Long!")
    .required("Required"),
});

export const announcementFormInitValues: IAnnouncementFormValues = {
  make: "",
  model: "",
  title: "",
  year: null,
  files: null,
  description: "",
  price: undefined,
};
