import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Message from "./../message/message";
import Product from "./../homescreen/product";
function WishListScreen(props) {
  const wishListItems = useSelector((state) => state.wishList.wishListItems);
  return (
    <div>
      <div className="homescreen__main">
        <Row>
          {wishListItems.length >= 0 ? (
            wishListItems.map((e, index) => (
              <Col sm={12} md={6} lg={6} xl={4} key={index}>
                <Product product={e} />
              </Col>
            ))
          ) : (
            <Message>No Items !</Message>
          )}
        </Row>
      </div>
    </div>
  );
}

export default WishListScreen;
