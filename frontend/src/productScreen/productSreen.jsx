import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  ListGroup,
  Image,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./../rating/rating";
import { listProductDetails } from "./../actions/productAction";
import { connect } from "react-redux";
import Loader from "../loader/loader";
import Massage from "../message/message";
function ProductScreen(props) {
  useEffect(() => {
    props.dispatch(listProductDetails(props.match.params.id));
    console.log(props);
  }, []);

  const { loading, product, error } = props.product;
  return (
    <>
      {loading ? (
        <Loader />
      ) : props.product.error ? (
        <Massage variant="danger">{error}</Massage>
      ) : (
        <>
          <Link className=" btn btn-dark mb-4" to="/">
            Go Back
          </Link>
          <Row className="mb-4">
            <Col lg={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col lg={3} className="my-1">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    number={`${product.numberReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price : ${product.price}</ListGroupItem>
                <ListGroupItem>
                  Description : {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg={3} className="align-middle">
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price : </Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Status : </Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out Of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      ADD TO CART
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return { product: state.productDetails };
};
export default connect(mapStateToProps)(ProductScreen);
