import { FC } from "react";
import { Button, Form } from "react-bootstrap";

import { Formik } from "formik";

import { useAppDispatch } from "../../redux/hooks";
import { createAnnouncement } from "../../redux/slices/announcements";
import { IAnnouncementFormValues } from "./CreateAnnouncement.types";
import {
  AnnouncementSchema,
  announcementFormInitValues,
} from "./CreateAnnouncement.constants";

export const CreateAnnouncement: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: IAnnouncementFormValues) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("model", values.model);
    formData.append("manufacturer", values.manufacturer);
    formData.append("price", "1000");
    Object.values(values.files).forEach((file: any) => {
      formData.append("files", file);
    });

    dispatch(createAnnouncement(formData));
  };

  // TODO: change hardcoded fields to dynamic and get data for selects

  return (
    <Formik
      initialValues={announcementFormInitValues}
      validationSchema={AnnouncementSchema}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        values,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <div className="CreateAnnouncement d-flex align-items-center flex-column mt-5">
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="manufacturer">
              <Form.Select
                onBlur={handleBlur}
                value={values.manufacturer}
                onChange={handleChange}
                isValid={touched.manufacturer && !errors.manufacturer}
                isInvalid={touched.manufacturer && !!errors.manufacturer}
              >
                <option>Select Manufacturer</option>
                <option value="1">Mercedes Benz</option>
                <option value="2">BMW</option>
                <option value="3">Audi</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.manufacturer}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="model">
              <Form.Select
                onBlur={handleBlur}
                value={values.model}
                onChange={handleChange}
                isValid={touched.model && !errors.model}
                isInvalid={touched.model && !!errors.model}
              >
                <option>Select Model</option>
                <option value="1">C300</option>
                <option value="2">C43</option>
                <option value="3">C63</option>
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
                  console.log("%c event ===>", "color: #90ee90", event);
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

            <Button type="submit" variant="primary">
              <span>Register</span>
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
