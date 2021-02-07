import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Message from "./../message/message";
import Product from "./../homescreen/product";
function WishListScreen(props) {
  const wishListItems = useSelector((state) => {
    console.log(state);
    return state.wishList.wishListItems;
  });
  return (
    <div>
      <div className="homescreen__main">
        {wishListItems.length !== 0 ? (
          <Row>
            {wishListItems.map((e, index) => (
              <Col sm={12} md={6} lg={6} xl={4} key={index}>
                <Product product={e} page={"wishList"} />
              </Col>
            ))}
          </Row>
        ) : (
          <Message>No Items !</Message>
        )}
      </div>
    </div>
  );
}

export default WishListScreen;
