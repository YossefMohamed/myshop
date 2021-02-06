import Header from "./header/header";
import { Container } from "react-bootstrap";
import Footer from "./footer/footer";
import HomeScreen from "./homescreen/homescreen";
import ProductScreen from "./productScreen/productSreen";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartScreen from "./cartScreen/cartScreen";
import loginScreen from "./loginScreen/loginScreen";
import Register from "./registerScreen/register";
import WishListScreen from "./wishLishScreen/wishListScreen";

import React from "react";
import ScrollTop from "./utiles/scroll";
import Profile from "./profileScreen/Profile";
import NotFound from "./notFoundScreen/notFoundScreen";
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
            <Switch>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/product/:id" component={ProductScreen} exact />
              <Route path="/cart/:id?" component={CartScreen} exact />
              <Route path="/wishList" component={WishListScreen} exact />
              <Route path="/signin" component={loginScreen} exact />
              <Route path="/Register" component={Register} exact />
              <Route path="/me" component={Profile} exact />
              <Route path="" component={NotFound} exact />
            </Switch>
          </Container>
        </div>

        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
