import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import axios from "axios";
import products from "./../products.js";
import Product from "./product.jsx";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function fetching() {
      const { data } = await axios.get("http://localhost:5000/api/products");
      console.log(data);
      setProducts(data);
    })();
  }, []);

  return (
    <div>
      <h1 className="text-center">last Items</h1>

      <Row>
        {products.map((e, index) => (
          <Col sm={12} md={6} lg={4} xl={3} key={index}>
            <Product product={e} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
