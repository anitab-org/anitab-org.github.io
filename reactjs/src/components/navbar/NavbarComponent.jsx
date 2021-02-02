import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import Logo from "../../assets/logo.png";

function NavbarComponent() {
  return (
    <>
      <Navbar
        expand="lg"
        className="nav-background container-fluid py-0 mb-5 font-18"
        sticky="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href="/" className="mx-0">
          <img
            src={Logo}
            alt="Anitab-org"
            className="img-fluid py-0 my-0"
            width="100px"
            height="100px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="/"
              className="font-bold font-18 px-3 navbar-item text-center"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="font-bold font-18 px-3 navbar-item text-center"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/programs"
              className="font-bold font-18
                  px-3 navbar-item text-center"
            >
              Programs
            </Nav.Link>
            <Nav.Link
              href="/projects"
              className="font-bold font-18 px-3 navbar-item text-center"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="/events"
              className="font-bold font-18 px-3 navbar-item text-center"
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="/contribute"
              className="font-bold font-18 px-3 navbar-item text-center"
            >
              Contribute
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
