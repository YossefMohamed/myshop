import Header from "./header/header";
import { Container } from "react-bootstrap";
import Footer from "./footer/footer";
import HomeScreen from "./homescreen/homescreen";
import ProductScreen from "./productScreen/productSreen";
import "./app.css";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./cartScreen/cartScreen";
import loginScreen from "./loginScreen/loginScreen";
import Register from "./registerScreen/register";
import WishListScreen from "./wishLishScreen/wishListScreen";

import React from "react";
import ScrollTop from "./utiles/scroll";
function App(props) {
  React.useEffect(() => {
    console.log(props);
    window.scrollTo(0, 0);
  }, [props.match]);

  return (
    <BrowserRouter>
      <ScrollTop>
        <Header />
        <div className="my-4 main">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/wishList" component={WishListScreen} />
            <Route path="/signin" component={loginScreen} />
            <Route path="/Register" component={Register} />
          </Container>
        </div>

        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
