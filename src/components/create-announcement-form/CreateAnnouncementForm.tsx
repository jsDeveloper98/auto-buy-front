import { FC } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

import { CARS_LIST } from "../../constants";
import { getAllYearsFrom1900ToCurrentYearPlusOne } from "../../utils";
import { useCreateAnnouncementForm } from "./CreateAnnouncementForm.hooks";

export const CreateAnnouncementForm: FC = () => {
  const {
    error,
    loading,
    carModels,
    handleMakeChange,
    formik: { handleSubmit, handleBlur, values, touched, errors, handleChange },
  } = useCreateAnnouncementForm();

  return (
    <fieldset disabled={loading}>
      <div className="CreateAnnouncementForm d-flex align-items-center flex-column mt-5">
        {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit} noValidate>
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

              {CARS_LIST.map((item) => (
                <option key={item.brand} value={item.brand}>
                  {item.brand}
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

              {carModels.map((model) => (
                <option key={model} value={model}>
                  {model}
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
