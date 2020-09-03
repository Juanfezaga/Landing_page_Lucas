import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const styles= {
    backgroundColor: '#005644',
  }

  return (
    <React.Fragment>
      <Navbar  expand="lg" variant="dark" style={styles}>
        <Navbar.Brand as={Link} to="/">Lucas Pizzeria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="" defaultActiveKey="/">
            <Nav.Link as={Link} to="/"  eventKey="/" >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Menu" eventKey="/Menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/Precio" eventKey="/Precio">
              Precio
            </Nav.Link>
            <Nav.Link as={Link} to="/Contacto" eventKey="/Contacto" >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavigationBar;
