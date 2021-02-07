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
  if (products) {
    console.log(products, "asdadasdadasdasdadass");
    products.map((e) => {
      if (!(counter === 5)) {
        sliderProducts.push(e);
      }
    });
  }
  console.log(products);

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
          {/* <Row>
            <Col md={7}>
              <Slideshow products={products} height={"25rem"} />
            </Col>
            <Col md={5} className="silderSection p-0">
              <Slideshow products={products} height={"12rem"} />
              <Slideshow products={products} height={"12rem"} />
            </Col>
          </Row> */}
          <Row>
            {products.map((e, index) => (
              <Col sm={12} md={6} lg={4} xl={3} key={index}>
                <Product product={e} page="home" />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { productList: state.productList };
};
export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;
