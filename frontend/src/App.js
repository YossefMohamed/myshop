import Header from "./header/header";
import { Container } from "react-bootstrap";
import Footer from "./footer/footer";
import HomeScreen from "./homescreen/homescreen";
import ProductScreen from "./productScreen/productSreen";

import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="my-4 main">
        <Container>
          <BrowserRouter>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
          </BrowserRouter>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default App;
