import React from "react";
import { Container, Navbar, Offcanvas, Nav, Image } from "react-bootstrap";
import { config } from "../../helpers/config";
import { Link } from "react-router-dom";
const Menubar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src="/images/logo/logo.png" alt={config.project.name} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mainMenu" />
        <Navbar.Offcanvas
          id="mainMenu"
          aria-labelledby="offcanvas"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="Offcanvas">
              <Image src="/images/logo/logo.png" alt={config.project.name} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/homepage">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/courses">
                Courses{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/events">
                Event
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Menubar;
