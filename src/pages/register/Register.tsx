import { FC } from "react";
import { Button, Form } from "react-bootstrap";

import { Formik } from "formik";

import { useAppDispatch } from "../../redux/hooks";
import { createUser } from "../../redux/slices/users";
import { regFormInitValues, RegisterSchema } from "./Register.constants";

export const Register: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={regFormInitValues}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        dispatch(createUser(values));
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        values,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="Register d-flex justify-content-center mt-5">
          <Form onSubmit={handleSubmit} noValidate className="w-25">
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onBlur={handleBlur}
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
                value={values.email}
                onBlur={handleBlur}
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
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter password"
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary">
              Register
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
