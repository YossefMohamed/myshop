import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";

// import { BiCartAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MY-SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="mx-2">
                <i className="fas fa-home mx-1"></i>
                HOME
              </Nav.Link>
              <Nav.Link href="#link" className="mx-2">
                <i className="fas fa-shopping-cart mx-1"></i> CART
              </Nav.Link>
              <Nav.Link href="#signIn" className="mx-2">
                <i className="fas fa-user mx-1 shadow-none"></i>
                SIGNIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
