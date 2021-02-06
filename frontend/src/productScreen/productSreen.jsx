import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  ListGroup,
  Image,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./../rating/rating";
import { listProductDetails } from "./../actions/productAction";
import { connect, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Massage from "../message/message";
import Review from "./review";
function ProductScreen(props) {
  const [qty, setQtu] = useState(1);
  useEffect(() => {
    props.dispatch(listProductDetails(props.match.params.id));
    console.log(props);

    return () => {};
  }, []);

  const { loading, product, error } = props.product;

  const addToCartHandler = () => {
    console.log(product.countInStock);
    if (product.countInStock !== 0) {
      props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
    }
  };
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const user = userLogin;

  return (
    <>
      {console.table(props.product)}
      {loading ? (
        <div className="loader">
          <Loader type="Circles" color="black" height={100} width={100} />
        </div>
      ) : error ? (
        <Massage variant="danger">{error}</Massage>
      ) : (
        <>
          <Link className="btn btn-my-shop mb-4" to="/">
            Go Back
          </Link>
          <Row className="my-5">
            <Col lg={4}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col lg={5} className="my-auto">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>{product.name}</h4>
                </ListGroup.Item>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    number={`${product.numberReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price : {product.price} $</ListGroupItem>
                <ListGroupItem>
                  Description : {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>

            <div className="col-md-3 col-12 p-3 my-auto">
              <div className="card card-body">
                <p className="mb-1">Price</p>
                <h3 className="m-0 txt-right">{product.price} $</h3>
                <hr className="my-4" />
                <Row>
                  <Col className="d-flex align-items-center">Quantity:</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={(e) => setQtu(e.target.value)}
                      size="sm"
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
                <hr className="my-4" />
                <div className="text-center">
                  <button
                    type="button"
                    className={`btn btn-my-shop mb-2 `}
                    onClick={addToCartHandler}
                  >
                    Add TO The Cart
                  </button>
                </div>
              </div>
            </div>
          </Row>
          <Review user={user} product={product} location={props.location} />
          {console.log(props)}
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return { product: state.productDetails };
};
export default connect(mapStateToProps)(ProductScreen);
