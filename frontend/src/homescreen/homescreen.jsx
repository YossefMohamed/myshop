import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import products from "./../products.js";
import Product from "./product.jsx";
import { listProducts } from "./../actions/productAction";
import Loader from "../loader/loader.jsx";
import Massage from "../message/message.jsx";

import "./homescreen.css";

const HomeScreen = (props) => {
  useEffect(() => {
    props.dispatch(listProducts());
  }, []);
  console.log(props);
  const { products, error } = props.productList;
  return (
    <div className="homescreen__main">
      <h1 className="text-center">last Items</h1>
      {props.productList.loading ? (
        <Loader />
      ) : props.productList.error ? (
        <Massage variant="danger">{error}</Massage>
      ) : (
        <Row>
          {products.map((e, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <Product product={e} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return { productList: state.productList };
};
export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;
