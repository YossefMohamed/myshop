import Header from "./header/header";
import { Container } from "react-bootstrap";
import Footer from "./footer/footer";
import HomeScreen from "./homescreen/homescreen";
import ProductScreen from "./productScreen/productSreen";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartScreen from "./cartScreen/cartScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="my-4 main">
        <Switch>
          <Container>
            <Route path="/" component={HomeScreen} exact="true" />
            <Route path="/product/:id" component={ProductScreen} exact="true" />
            <Route path="/cart/:id?" component={CartScreen} exact="true" />
          </Container>
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
