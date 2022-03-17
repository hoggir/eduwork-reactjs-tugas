import React from "react";
import "./index.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navigasi extends React.Component {
  render() {
    return (
      <Navbar bg="mybg" expand="lg" variant="dark" fixed="top">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#profile">BIO</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="Toggle " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#news">News</NavDropdown.Item>
                </Link>
                <Link to="/regis" style={{ textDecoration: "none" }}>
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
