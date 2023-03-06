import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openConfirmationModal } from "../../redux/slices/confirmationModal";

export const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  const pathIsActive = (path: string): boolean => pathname === path;

  const openLogoutConfirmation = (): void => {
    dispatch(
      openConfirmationModal({
        title: "Your'e sure that you want to logout?",
        confirmActionName: "logout",
      })
    );
  };

  return (
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
                <Nav.Link active={pathIsActive("/login")} as={Link} to="/login">
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
  );
};
