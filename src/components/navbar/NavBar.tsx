import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

export const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Auto Buy
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">My Announcements</Nav.Link>
          <Nav.Link href="#features">Create Announcement</Nav.Link>
        </Nav>

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
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
