import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSearch } from "../actions/productAction";
import Product from "../homescreen/product";
import { Row, Col } from "react-bootstrap";
import Message from "../message/message";
import Loader from "react-loader-spinner";

function SearchScreen(props) {
  const [searchText, setSearchText] = React.useState(
    props.match.params.id
  );
  React.useEffect(() => {
    setSearchText(props.match.params.id);

  }, [props.match.params.id]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(props.match.params.id,"PARAMS")
    console.log(searchText,"search")

    dispatch(listSearch(props.match.params.id));
  }, [props.match.params.id]);

  const { products, loading } = useSelector((state) => state.productList);
  const searched = products.totalPages?products.products:products
  return (
    <div>
      {loading && (
        <div className="loader">
          <Loader type="Circles" color="black" height={100} width={100} />
        </div>
      )}
      {searched.length !== 0 ? (
        <Row>
          {searched.map((e, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <Product product={e} page="home" />
            </Col>
          ))}
        </Row>
      ) : (
        !loading && <Message>There's No Products</Message>
      )}
    </div>
  );
}

export default SearchScreen;
