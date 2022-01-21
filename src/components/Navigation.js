import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">
              Inicia sesión
            </Nav.Link>
            <NavDropdown title="Gestionar" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/usuarios">
                Usuarios
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos">
                Productos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categorias">
                Categorías
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
