import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import Menu from "./menu";

const Info = () => {
  const [clicked, setClicked] = React.useState(false);
  const handleOnClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="info">
      <Container>
        <div className="d-flex justify-content-between">
          <div className="mr-auto contect__info">
            <div className="nav__content--flex">
              <div className="nav__email">
                <i className="fas fa-envelope"></i>
                <span className="nav__email--content">
                  yossef.mohamed@gmail.com
                </span>
              </div>
              <div className="nav__phone">
                <i className="fas fa-phone-alt"></i>
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
                      <i className="fab fa-facebook-f"></i>
                    </li>
                    <li>
                      <i className="fab fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fab fa-instagram"></i>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav__phone">
                <Menu clicked={clicked} />
                <i className="fas fa-globe-americas"></i>{" "}
                <strong>English</strong>
                <div className="menu-arrow">&#8249;</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
