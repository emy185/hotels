import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/images/logo-1.svg";
import "./Navbar.module.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="py-3 shadow">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="/Tour">Tour</Nav.Link>
              <Nav.Link href="#">Destination</Nav.Link>
              <Nav.Link href="#">Activities</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Nav className="mb-2 mb-lg-0">
              <Nav.Link href="#">USD</Nav.Link>
              <Nav.Link href="#">Help</Nav.Link>
              <Nav.Link href="#">Sign up</Nav.Link>
              <Button variant="outline-dark" className="rounded-5">
                Log in
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
 
export default NavBar;