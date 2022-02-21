import React from 'react'
import "./NavBar.css";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="mybg" expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Fadel</Navbar.Brand>
          <Navbar.Toggle aria-controls="Toggle " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#aboutme">About</Nav.Link>
              <Nav.Link href="#contactme">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
