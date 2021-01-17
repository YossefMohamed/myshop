import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";

// import { BiCartAlt } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>MY-SHOP</Navbar.Brand>
          </LinkContainer>

          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link className="mx-2">
                <i className="fas fa-shopping-cart mx-1"></i> CART
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link className="mx-2">
                <i className="fas fa-user mx-1 shadow-none"></i>
                SIGNIN
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
