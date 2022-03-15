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
            <Navbar.Brand href="#home">BIO</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="Toggle " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#aboutme">About</Nav.Link>
                <Nav.Link href="#contactme">Contact</Nav.Link>

              <NavDropdown title="Project" id="basic-nav-dropdown">
              <Link to="/news" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#news">News</NavDropdown.Item>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#login">
                  Login Form
                </NavDropdown.Item>
              </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
