import React from "react";
import "./index.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default class Navigasi extends React.Component {
  render() {
    return (
      <Navbar bg="mybg" expand="lg" variant="dark" fixed="top">
        <Container>
          <HashLink to="/#index">
            <Navbar.Brand>BIO</Navbar.Brand>
          </HashLink>
          <Navbar.Toggle aria-controls="Toggle " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <HashLink to="/#about" style={{ textDecoration: "none" }}>
                <Nav.Link href="#about">About</Nav.Link>
              </HashLink>
              <HashLink to="/#contact" style={{ textDecoration: "none" }}>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </HashLink>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#news">News</NavDropdown.Item>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#login">Login Form</NavDropdown.Item>
                </Link>
                <Link to="/redux" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#counter">Counter</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
