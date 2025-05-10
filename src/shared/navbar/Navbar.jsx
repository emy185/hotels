import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/logo-1.svg";

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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Tour">Tour</Nav.Link>
              <Nav.Link href="/Guides">Destination</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            <Nav className="mb-2 mb-lg-0">
              <Nav.Link href="#">Help</Nav.Link>
              <Nav.Link href="#">Sign up</Nav.Link>
              <Nav.Link
                className="rounded-5 border px-3 border-dark"
                href="/Login"
              >
                Log in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
