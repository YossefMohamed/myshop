import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "./product.jsx";
import { listProducts } from "./../actions/productAction";
import Loader from "react-loader-spinner";
import Massage from "../message/message.jsx";
import Pagination from "react-bootstrap-4-pagination";

// Import Swiper styles
// import "swiper/swiper.scss";

import "./homescreen.css";
import Message from "../message/message.jsx";
import Slideshow from "../slideshow/slideshow.jsx";

const HomeScreen = (props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (props.location.search) {
      setPage(props.location.search.split("=")[1]);
    } else {
      setPage(1);
    }
    // console.log(page >props.productList.products.totalPages)
    if(props.productList.products.totalPages){
      if (page > props.productList.products.totalPages) {
        props.history.push("/not-found");
      }
    }
    props.dispatch(listProducts(page - 1));
  }, [props.location, page]);

  let paginationConfig = {
    totalPages: props.productList.products.totalPages?props.productList.products.totalPages:25,
    currentPage: page,
    threeDots: true,
    showMax: 4,
    size: "lg",
    shadow: false,
    prevNext: true,
    onClick: function (page) {
      setPage(page);
      props.history.push(`/?number=${page}`);
    },
  };

  const { products, error } = props.productList.products;
  let sliderProducts = [];
  let counter = 0;
  const [x, setX] = useState(0);
  if (products) {
    // console.log(products, "asdadasdadasdasdadass");
    products.map((e) => {
      if (!(counter === 5)) {
        sliderProducts.push(e);
      }
    });
  }

  return (
    <div className="homescreen__main">
      {props.productList.products.loading ? (
        <div className="loader">
          <Loader type="Circles" color="black" height={100} width={100} />
        </div>
      ) : props.productList.products.error ? (
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

          {products ? (
            <>
              <div className="my-5">
                <Slideshow products={products} height={"25rem"} />
              </div>

              <h1 className="mb-2 mt-5">Last Items :</h1>

              <Row>
                {products.map((e, index) => (
                  <Col sm={12} md={6} lg={4} xl={3} key={index}>
                    <Product product={e} page="home" />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <div className="loader mx-auto">
              <Loader type="Circles" color="black" height={100} width={100} />
            </div>
          )}

          <div className="pagination-component my-5">
            <Pagination {...paginationConfig} />
          </div>
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
