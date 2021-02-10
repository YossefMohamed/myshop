import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./notFound.css";
function NotFound() {
  return (
    <Row className="notfound__container">
      <Col md={3} className="notfound--code">
        <h1>404</h1>{" "}
      </Col>
      <Col md={9}>
        <h3>
          This Page Not Found <Link to="/">Click Here</Link> To Go Home
        </h3>{" "}
      </Col>
    </Row>
  );
}

export default NotFound;
