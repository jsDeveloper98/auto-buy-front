import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

import { Formik } from "formik";

import { register } from "../../redux/slices/users";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { regFormInitValues, RegisterSchema } from "./RegisterForm.constants";

export const RegisterForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.users);

  return (
    <Formik
      initialValues={regFormInitValues}
      validationSchema={RegisterSchema}
      onSubmit={(values) =>
        dispatch(register(values))
          .unwrap()
          .then((res) => {
            localStorage.setItem("userData", JSON.stringify(res.data));
            navigate("/");
          })
      }
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
          <div className="RegisterForm d-flex align-items-center flex-column mt-5">
            {error && (
              <Alert key="danger" variant="danger">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} noValidate className="w-25">
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
          </div>
        </fieldset>
      )}
    </Formik>
  );
};
