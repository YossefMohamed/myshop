import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishList, removeFromWishList } from "../actions/whishlistAction";
import Rating from "../rating/rating";
import { addToCart } from "./../actions/cartAction";
function Product(props) {
  const [wishListed, setWishListed] = React.useState(false);
  const dispatch = useDispatch();
  let cartItemsQty = 0;
  useSelector((state) => {
    return state.cart.cartItems.map((e) => {
      if (e._id === props.product._id) cartItemsQty += e.qty;
    });
  });
  const wishListItems = useSelector((state) => state.wishList.wishListItems);

  useEffect(() => {
    wishListItems.map((e) => {
      if (e._id === props.product._id) {
        setWishListed(true);
      }
    });
  }, [wishListItems]);

  return (
    <div>
      <Card className="my-3 rounded-top w-100 card__item  ">
        <div
          className={`love--icon ${
            wishListed || props.page === "wishList" ? "loved" : ""
          }`}
          onClick={() => {
            if (props.page !== "wishList") {
              dispatch(addToWishList(props.product._id));
            }
          }}
        >
          <i className="fas fa-heart"></i>
        </div>
        <div
          className={`trash--icon ${props.page === "home" ? "d-none" : ""}`}
          onClick={() => {
            if(props.product.product){
              
            dispatch(removeFromWishList(props.product.product));
            }else{
              
            dispatch(removeFromWishList(props.product._id));
            }
          }}
        >
          {" "}
          <i className="fas fa-trash-alt"></i>
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
                className={`py-2 ${
                  props.product.countInStock &&
                  cartItemsQty !== props.product.countInStock
                    ? "btn--enable"
                    : "btn--disable"
                } cart--icon`}
                sm={3}
                onClick={() => {
                  if (props.product.countInStock) {
                    dispatch(addToCart(props.product._id, 1));
                  }
                }}
                as="button"
              >
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
