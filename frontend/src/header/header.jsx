import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import Menu from "./menu";

import "./header.css";
import Popup from "./popup";
import Info from "./info";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import { BiCartAlt } from "react-icons/bi";

const Header = () => {
  const [search, setSearch] = React.useState(false);
  const [options, setOptions] = React.useState({
    bag: false,
    love: false,
  });
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishListItemsState = useSelector(
    (state) => state.wishList.wishListItems
  );
  const hanldePopUp = (type) => {
    const other = ["bag", "love"].filter((e) => e !== type);
    setOptions({ [other]: false, [type]: !options[type] });
  };
  // console.log(wishListItemsState);
  const handleSearch = () => {
    setSearch(!search);
    setOptions({
      bag: false,
      love: false,
    });
  };

  let noCartItems = 0;

  cartItems.forEach((element) => {
    noCartItems += element.qty;
  });

  // console.log(noCartItems);
  React.useEffect(() => {
    // console.log(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <nav>
      <Info />
      <div className="nav__main">
        <Container className="nav__main--flex">
          <div className="nav__main--logo">
            <Link to="/">
              <img src="logo.png" alt="logo" />
            </Link>
          </div>
          <div className="nav__main--search">
            <input type="text" placeholder="search" className="search--input" />
          </div>
          <div className="nav__main--options">
            <div className="option option--bag">
              <div
                className="no-cart-items"
                onClick={(e) => hanldePopUp("bag")}
              >
                {noCartItems}
              </div>
              <Link onClick={(e) => hanldePopUp("bag")}>
                <i className="fas fa-shopping-bag"></i>{" "}
              </Link>
              <Popup
                clickMe={hanldePopUp}
                type="Cart page"
                linkTo="cart"
                display={{ display: options.bag }}
                cartItems={cartItems}
              />
            </div>
            <div className="option option--love">
              <div onClick={(e) => hanldePopUp("love")}>
                <i className="fas fa-heart"></i>
              </div>
              <Popup
                display={{ display: options.love }}
                clickMe={hanldePopUp}
                type="Wish List page"
                linkTo="wishlist"
                cartItems={wishListItemsState}
              />
            </div>
            <div className="option">
              <Link to="/signin">
                <i className="fas fa-user"></i>
              </Link>
            </div>
            <div className="option option--love" onClick={handleSearch}>
              <i className="fas fa-search"></i>{" "}
            </div>
          </div>
        </Container>
        <Container>
          {" "}
          <div
            className="nav__main--search search--option"
            style={{ display: `${search ? "block" : "none"}` }}
          >
            <input type="text" placeholder="search" className="search--input" />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Header;
