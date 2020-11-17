import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar variant="light" bg="warning" expand="lg">
      <Navbar.Brand href="#home">Book Strap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
          <NavDropdown title="Genres" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Sci-Fi</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
