import { ChangeEvent, FC, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

import { useFormik } from "formik";

import { getCarModels } from "../../redux/slices/cars";
import { AnnouncementService } from "../../services";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IAnnouncementFormValues } from "./CreateAnnouncement.types";
import { getAllYearsFrom1900ToCurrentYearPlusOne } from "../../utils";
import {
  AnnouncementSchema,
  announcementFormInitValues,
} from "./CreateAnnouncement.constants";

export const CreateAnnouncement: FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    data: { token },
  } = useAppSelector((state) => state.users);
  const {
    carMakes: { data: carMakesData },
    carModels: { data: carModelsData },
  } = useAppSelector((state) => state.cars.data);

  const createAnnouncement = async (values: FormData) => {
    setLoading(true);

    try {
      await AnnouncementService.create(values, token);
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
    formData.append("description", values.description);
    Object.values(values.files).forEach((file: any) => {
      formData.append("files", file);
    });

    if (values.price) {
      formData.append("price", String(values.price));
    }

    createAnnouncement(formData);
  };

  // TODO: display success messages after successfully registration and announcement creation
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit: handleFormikSubmit,
  } = useFormik({
    onSubmit: handleSubmit,
    validationSchema: AnnouncementSchema,
    initialValues: announcementFormInitValues,
  });

  const handleMakeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleChange(event);
    dispatch(getCarModels(event.target.value));
  };

  return (
    <fieldset disabled={loading}>
      <div className="CreateAnnouncement d-flex align-items-center flex-column mt-5">
        {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleFormikSubmit} noValidate>
          <Form.Group className="mb-3" controlId="make">
            <Form.Select
              onBlur={handleBlur}
              value={values.make}
              onChange={handleMakeChange}
              isValid={touched.make && !errors.make}
              isInvalid={touched.make && !!errors.make}
            >
              <option value="" disabled>
                Select Make
              </option>

              {carMakesData.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.make}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="model">
            <Form.Select
              onBlur={handleBlur}
              value={values.model}
              onChange={handleChange}
              disabled={!values.make}
              isValid={touched.model && !errors.model}
              isInvalid={touched.model && !!errors.model}
            >
              <option value="" disabled>
                Select Model
              </option>

              {carModelsData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.model}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="year">
            <Form.Select
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.year ?? ""}
              isValid={touched.year && !errors.year}
              isInvalid={touched.year && !!errors.year}
            >
              <option value="" disabled>
                Select Year
              </option>

              {getAllYearsFrom1900ToCurrentYearPlusOne().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.model}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Control
              type="number"
              onBlur={handleBlur}
              placeholder="Price"
              onChange={handleChange}
              value={values.price ?? ""}
              isValid={touched.price && !errors.price}
              isInvalid={touched.price && !!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Control
              onBlur={handleBlur}
              placeholder="Title"
              value={values.title}
              onChange={handleChange}
              isValid={touched.title && !errors.title}
              isInvalid={touched.title && !!errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              rows={3}
              as="textarea"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              placeholder="Write description about your car"
              isValid={touched.description && !errors.description}
              isInvalid={touched.description && !!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="files" className="mb-3">
            <Form.Label>Upload photos of your car</Form.Label>
            <Form.Control
              multiple
              type="file"
              name="files"
              accept="image/*"
              onChange={(event) => {
                handleChange({
                  target: {
                    name: "files",
                    value: (event.target as HTMLInputElement).files,
                  },
                });
              }}
              isValid={touched.files && !errors.files}
              isInvalid={touched.files && !!errors.files}
            />
          </Form.Group>

          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? (
              <span>
                <Spinner
                  as="span"
                  size="sm"
                  role="status"
                  animation="border"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </span>
            ) : (
              <span>Publish</span>
            )}
          </Button>
        </Form>
      </div>
    </fieldset>
  );
};
