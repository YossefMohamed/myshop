import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../rating/rating";
import { addToCart } from "./../actions/cartAction";
function Product(props) {
  const dispatch = useDispatch();
  let cartItemsQty = 0;

  useSelector((state) => {
    return state.cart.cartItems.map((e) => {
      if (e.product === props.product._id) cartItemsQty += e.qty;
    });
  });
  console.log(
    props.product.countInStock && cartItemsQty !== props.product.countInStock,
    "Stock"
  );

  return (
    <div>
      <Card className="my-3 rounded w-100 card__item">
        <div className="love--icon">
          <i class="fas fa-heart"></i>
        </div>
        <Link to={`/product/${props.product._id}`}>
          <Card.Img
            variant="top"
            src={props.product.image}
            className="card__image"
          />
        </Link>
        <Card.Body className="card--body">
          <Card.Title
            as="div"
            className="text-dark text-left card--title py-3 mb-0 px-2"
          >
            <Link to={`/product/${props.product._id}`}>
              <strong> {props.product.name}</strong>
            </Link>
          </Card.Title>
          <Card.Text as="div" className="my-0 ">
            <Row noGutters>
              <Col sm={9} className="px-2 py-2">
                <Card.Text as="h4" className=" ">
                  ${props.product.price}
                </Card.Text>
                <Rating
                  value={props.product.rating}
                  number={`${props.product.numberReviews} reviews`}
                />
              </Col>
              <Col
                className={`border cart--icon border-top-0 py-2 ${
                  props.product.countInStock &&
                  cartItemsQty !== props.product.countInStock
                    ? "btn--enable"
                    : "btn--disable"
                }`}
                sm={3}
                onClick={() => {
                  if (props.product.countInStock) {
                    console.log(cartItemsQty, "CartItemAdded");
                    dispatch(
                      addToCart(
                        props.product._id,
                        cartItemsQty < props.product.countInStock
                          ? ++cartItemsQty
                          : cartItemsQty
                      )
                    );
                  }
                }}
              >
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
