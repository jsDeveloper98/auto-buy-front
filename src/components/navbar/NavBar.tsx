import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import { useNavBar } from "./NavBar.hooks";

export const NavBar: React.FC = () => {
  const { openLogoutConfirmation, pathIsActive, token } = useNavBar();

  return (
    <div className="NavBar">
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <div className="d-flex">
            <Navbar.Brand as={Link} to="/">
              Auto Buy
            </Navbar.Brand>

            {token && (
              <Nav>
                <Nav.Link
                  as={Link}
                  to="/my_announcements"
                  active={pathIsActive("/my_announcements")}
                >
                  My Announcements
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/create_announcement"
                  active={pathIsActive("/create_announcement")}
                >
                  Create Announcement
                </Nav.Link>
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
                <Nav.Link as="div" onClick={openLogoutConfirmation}>
                  Logout
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    active={pathIsActive("/login")}
                    as={Link}
                    to="/login"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/register"
                    active={pathIsActive("/register")}
                  >
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
