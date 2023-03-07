import { mixed, object, string } from "yup";

import { IAnnouncementFormValues } from "./CreateAnnouncement.types";

export const AnnouncementSchema = object().shape({
  title: string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  description: string()
    .min(20, "Too Short!")
    .max(400, "Too Long!")
    .required("Required"),
  file: mixed().required("File is required"),
});

export const announcementFormInitValues: IAnnouncementFormValues = {
  file: "",
  title: "",
  description: "",
};
