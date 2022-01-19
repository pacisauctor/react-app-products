import {  Route, Routes, Link, BrowserRouter} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import {Categorias, Inicio, Productos, Usuarios, Login} from './routes';

const Navigation = () =>
{ 
  return(<>
  <BrowserRouter>

    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">Inicia sesión</Nav.Link>
          <NavDropdown title="Gestionar" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/usuarios">Usuarios</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productos">Productos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categorias">Categorías</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    <Routes>
      <Route exact path="/" element={<Inicio/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/usuarios" element={<Usuarios/>}/>
      <Route exact path="/productos" element={<Productos/>}/>
      <Route exact path="/categorias" element={<Categorias/>}/>

    </Routes>
    </BrowserRouter>

</>)}



function App() {
  return (
    <>
    <Navigation/>
    </>
  );
}

export default App;
