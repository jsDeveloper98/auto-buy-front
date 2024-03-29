import { ChangeEvent, useState } from "react";

import { useFormik } from "formik";

import { CARS_LIST } from "../../constants";
import { AnnouncementService } from "../../services";
import { IAnnouncementFormValues } from "./CreateAnnouncementForm.types";
import {
  AnnouncementSchema,
  announcementFormInitValues,
} from "./CreateAnnouncementForm.constants";

export const useCreateAnnouncementForm = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [carModels, setCarModels] = useState<string[]>([]);

  const createAnnouncement = async (values: FormData) => {
    setLoading(true);

    try {
      await AnnouncementService.create(values);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (values: IAnnouncementFormValues) => {
    const formData = new FormData();
    formData.append("make", values.make);
    formData.append("title", values.title);
    formData.append("model", values.model);
    formData.append("year", String(values.year));
    formData.append("price", String(values.price));
    formData.append("description", values.description);

    Object.values(values.images).forEach((img: any) => {
      formData.append("images", img);
    });

    createAnnouncement(formData);
  };

  // TODO: display success messages after successfully registration and announcement creation
  const formik = useFormik({
    onSubmit: handleSubmit,
    validationSchema: AnnouncementSchema,
    initialValues: announcementFormInitValues,
  });

  const handleMakeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    formik.handleChange(event);

    const car = CARS_LIST.find((item) => item.brand === event.target.value);

    if (car) {
      setCarModels(car?.models);
    }
  };

  return {
    error,
    formik,
    loading,
    carModels,
    handleMakeChange,
  };
};
