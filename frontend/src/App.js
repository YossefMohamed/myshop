import Header from "./header/header";
import { Container } from "react-bootstrap";
import Footer from "./footer/footer";
import HomeScreen from "./homescreen/homescreen";
import ProductScreen from "./productScreen/productSreen";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartScreen from "./cartScreen/cartScreen";
import loginScreen from "./loginScreen/loginScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="my-4 main">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/signin" component={loginScreen} />
        </Container>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
