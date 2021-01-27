import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import Menu from "./menu";

import "./header.css";
import Popup from "./popup";

// import { BiCartAlt } from "react-icons/bi";

const Header = () => {
  const [clicked, setClicked] = React.useState(false);
  const handleOnClick = () => {
    setClicked(!clicked);
  };
  const [search, setSearch] = React.useState(false);
  const [options, setOptions] = React.useState({
    bag: false,
    love: false,
  });

  const hanldePopUp = (type) => {
    const other = ["bag", "love"].filter((e) => e !== type);
    console.table(other);
    setOptions({ [other]: false, [type]: !options[type] });
  };
  const handleSearch = () => {
    setSearch(!search);
    setOptions({
      bag: false,
      love: false,
    });
    console.table(search);
  };

  console.table(options);

  React.useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);
  return (
    // <>
    //   <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    //     <Container>
    //       <LinkContainer to="/">
    //         <Navbar.Brand>MY-SHOP</Navbar.Brand>
    //       </LinkContainer>

    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ml-auto">
    //           <LinkContainer to="/cart">
    //             <Nav.Link className="mx-2">
    //               <i className="fas fa-shopping-cart mx-1"></i> CART
    //             </Nav.Link>
    //           </LinkContainer>
    //           <LinkContainer to="/signin">
    //             <Nav.Link className="mx-2">
    //               <i className="fas fa-user mx-1 shadow-none"></i>
    //               SIGNIN
    //             </Nav.Link>
    //           </LinkContainer>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </>

    <nav>
      <div className="info">
        <Container>
          <div className="d-flex justify-content-between">
            <div className="mr-auto contect__info">
              <div className="nav__content--flex">
                <div className="nav__email">
                  <i class="fas fa-envelope"></i>
                  <span className="nav__email--content">
                    yossef.mohamed@gmail.com
                  </span>
                </div>
                <div className="nav__phone">
                  <i class="fas fa-phone-alt"></i>
                  <span className="nav__phone--content">01151784019</span>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <div className="nav__content--flex">
                <div className="nav__email">
                  <div className="social">
                    <ul>
                      <li>
                        <i class="fab fa-facebook-f"></i>
                      </li>
                      <li>
                        <i class="fab fa-twitter"></i>
                      </li>
                      <li>
                        <i class="fab fa-instagram"></i>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav__phone">
                  <Menu clicked={clicked} />
                  <i class="fas fa-globe-americas"></i>{" "}
                  <strong
                    onClick={(e) => {
                      handleOnClick();
                    }}
                  >
                    English
                  </strong>
                  <div className="menu-arrow">&#8249;</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="nav__main">
        <Container className="nav__main--flex">
          <div className="nav__main--logo">
            <i class="fas fa-shipping-fast"></i>
          </div>
          <div className="nav__main--search">
            <input type="text" placeholder="search" className="search--input" />
          </div>
          <div className="nav__main--options">
            <div
              className="option option--bag"
              onClick={(e) => hanldePopUp("bag")}
            >
              <i class="fas fa-shopping-bag"></i>
              <Popup display={{ display: options.bag }} />
            </div>
            <div
              className="option option--love"
              onClick={(e) => hanldePopUp("love")}
            >
              <i class="fas fa-heart"></i>
              <Popup display={{ display: options.love }} />
            </div>
            <div className="option">
              <i class="fas fa-user"></i>
            </div>
            <div className="option option--love" onClick={handleSearch}>
              <i class="fas fa-search"></i>{" "}
            </div>
          </div>
        </Container>
        <div
          className="nav__main--search search--option"
          style={{ display: `${search ? "block" : "none"}` }}
        >
          <input type="text" placeholder="search" className="search--input" />
        </div>
      </div>
    </nav>
  );
};

export default Header;

// <div className="social">
// <ul>
//   <li>
//     <i class="fab fa-facebook-f"></i>
//   </li>
//   <li>
//     <i class="fab fa-twitter"></i>
//   </li>
//   <li>
//     <i class="fab fa-instagram"></i>{" "}
//   </li>
// </ul>
// </div>

// <Col className="language">
{
  /* <i class="fas fa-globe-americas"></i> */
}
// </Col>
