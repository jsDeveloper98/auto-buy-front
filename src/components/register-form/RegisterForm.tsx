import { FC } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

import { Formik } from "formik";

import { useRegisterForm } from "./RegisterForm.hooks";
import { regFormInitValues, RegisterSchema } from "./RegisterForm.constants";

export const RegisterForm: FC = () => {
  const { error, handleRegister, loading } = useRegisterForm();

  return (
    <div className="RegisterForm d-flex align-items-center flex-column">
      <Formik
        onSubmit={handleRegister}
        initialValues={regFormInitValues}
        validationSchema={RegisterSchema}
      >
        {({
          errors,
          values,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <fieldset disabled={loading}>
            {error && (
              <Alert key="danger" variant="danger">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  onBlur={handleBlur}
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  isValid={touched.username && !errors.username}
                  isInvalid={touched.username && !!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
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
                  <span>Register</span>
                )}
              </Button>
            </Form>
          </fieldset>
        )}
      </Formik>
    </div>
  );
};
