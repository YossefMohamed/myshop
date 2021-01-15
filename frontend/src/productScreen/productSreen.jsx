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
import products from "../products";
import axios from "axios";
function ProductScreen(props) {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    (async function fetching() {
      const { data } = await axios.get(
        "http://localhost:5000/api/products/" + props.match.params.id
      );
      console.log(data);
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <Link className=" btn btn-dark my-5" to="/">
        Go Back
      </Link>
      <Row>
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
            <ListGroupItem>Description : {product.description}</ListGroupItem>
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
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
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
  );
}

export default ProductScreen;
