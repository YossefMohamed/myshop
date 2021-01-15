import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../rating/rating";
function Product(props) {
  return (
    <div>
      <Card className="my-3 p-1 rounded w-100">
        <Card.Img variant="top" src={props.product.image} />
        <Card.Body>
          <Card.Title as="div" className="text-dark ">
            <Link to={`/product/${props.product._id}`}>
              <strong> {props.product.name}</strong>
            </Link>
          </Card.Title>
          <Card.Text as="div" className="my-4 text-center">
            <Rating
              value={props.product.rating}
              number={`${props.product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3" className="my-1 text-center">
            ${props.product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
