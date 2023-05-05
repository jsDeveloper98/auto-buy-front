import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

import { Formik } from "formik";

import { login } from "../../redux/slices/users";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { LoginSchema, loginFormInitValues } from "./LoginForm.constants";

export const LoginForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.users);

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={loginFormInitValues}
      onSubmit={(values) => {
        dispatch(login(values))
          .unwrap()
          .then((res) => {
            localStorage.setItem("userData", JSON.stringify(res.data));
            navigate("/");
          });
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
        <fieldset disabled={loading}>
          <div className="LoginForm d-flex align-items-center flex-column mt-5">
            {error && (
              <Alert key="danger" variant="danger">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} noValidate className="w-25">
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
                  <span>Login</span>
                )}
              </Button>
            </Form>
          </div>
        </fieldset>
      )}
    </Formik>
  );
};
