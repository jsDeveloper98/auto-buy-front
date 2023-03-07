import { FC } from "react";
import { Form } from "react-bootstrap";

import { Formik } from "formik";

import {
  AnnouncementSchema,
  announcementFormInitValues,
} from "./CreateAnnouncement.constants";

export const CreateAnnouncement: FC = () => {
  return (
    <Formik
      initialValues={announcementFormInitValues}
      validationSchema={AnnouncementSchema}
      onSubmit={(values) => {
        console.log("submitted");
        console.log("%c values ===>", "color: #90ee90", values);
      }}
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

            {/* TODO: HOVO continue form here */}
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload photos of your car </Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Form>
        </div>
      )}
    </Formik>
  );
};
