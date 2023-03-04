import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import { useAppSelector } from "../../redux/hooks";

export const NavBar: React.FC = () => {
  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <div className="d-flex">
          <Navbar.Brand as={Link} to="/">
            Auto Buy
          </Navbar.Brand>

          {token && (
            <Nav>
              <Nav.Link href="#home">My Announcements</Nav.Link>
              <Nav.Link href="#features">Create Announcement</Nav.Link>
            </Nav>
          )}
        </div>

        <div className="d-flex">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Model, Vin, Brand..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav>
            {token ? (
              <Nav.Link as={Link} to="/logout">
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
