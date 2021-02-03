import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "./product.jsx";
import { listProducts } from "./../actions/productAction";
import Loader from "react-loader-spinner";
import Massage from "../message/message.jsx";

// Import Swiper styles
// import "swiper/swiper.scss";

import "./homescreen.css";
import Slideshow from "../slideshow/slideshow.jsx";

const HomeScreen = (props) => {
  useEffect(() => {
    props.dispatch(listProducts());
  }, []);
  const { products, error } = props.productList;
  let sliderProducts = [];
  let counter = 0;
  const [x, setX] = useState(0);
  products.map((e) => {
    if (!(counter === 5)) {
      sliderProducts.push(e);
    }
  });

  return (
    <div className="homescreen__main">
      {props.productList.loading ? (
        <div className="loader">
          <Loader type="Circles" color="black" height={100} width={100} />
        </div>
      ) : props.productList.error ? (
        <Massage variant="danger">{error}</Massage>
        ) : (
          <>
          <Slideshow products={products} />
          
          <Row>
            {products.map((e, index) => (
              <Col sm={12} md={6} lg={6} xl={4} key={index}>
                <Product product={e} page="home" />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return { productList: state.productList };
};
export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;
