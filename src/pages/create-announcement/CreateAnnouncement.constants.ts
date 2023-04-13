import { mixed, object, string } from "yup";

import { IAnnouncementFormValues } from "./CreateAnnouncement.types";

export const AnnouncementSchema = object().shape({
  model: string().required("Required"),
  manufacturer: string().required("Required"),
  files: mixed().required("Required"),
  title: string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  description: string()
    .min(20, "Too Short!")
    .max(400, "Too Long!")
    .required("Required"),
});

export const announcementFormInitValues: IAnnouncementFormValues = {
  model: "",
  title: "",
  files: null,
  description: "",
  price: undefined,
  manufacturer: "",
};
