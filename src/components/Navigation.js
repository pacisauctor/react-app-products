import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import store from "../store";
import { NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from '../actions/auth';
import Swal from 'sweetalert2'

const Navigation = ({user}) => {

  
  const logoutEvent  = () =>{
    store.dispatch(logout()).then(()=>{
      Swal.fire({
        title: 'Sessión cerrada!',
        text: "Vuelva pronto",
        icon: 'info',
        confirmButtonText: 'Cool'
      })
    })
  }
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? 
            <>
            <Nav.Item onClick={logoutEvent} className="nav-link">
              Cierra sesión
            </Nav.Item>
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
            </>:
            <Nav.Link as={Link} to="/login">
            Inicia sesión
            </Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) =>{
  const {user} = state.auth;
  return {
    user,
  }
}


export default connect(mapStateToProps)(Navigation);
