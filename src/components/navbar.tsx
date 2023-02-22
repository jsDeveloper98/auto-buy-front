import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

export const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Auto Buy</Navbar.Brand>
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
      </Container>
    </Navbar>
  );
};
