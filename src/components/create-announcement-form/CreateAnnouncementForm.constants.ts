import { mixed, number, object, string } from "yup";

import { IAnnouncementFormValues } from "./CreateAnnouncementForm.types";
import {
  MIN_CAR_PRICE,
  MAX_CAR_PRICE,
  INPUT_TYPE_MIN_LENGTH,
  INPUT_TYPE_MAX_LENGTH,
  TEXTAREA_TYPE_MIN_LENGTH,
  TEXTAREA_TYPE_MAX_LENGTH,
} from "../../constants";

export const AnnouncementSchema = object().shape({
  make: string().required("Required"),
  year: number().required("Required"),
  images: mixed().required("Required"),
  model: string().required("Required"),
  price: number()
    .min(MIN_CAR_PRICE, "Too Few!")
    .max(MAX_CAR_PRICE, "Too Much!")
    .required("Required"),
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
  images: null,
  description: "",
  year: undefined,
  price: undefined,
};
