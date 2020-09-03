import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Price from "./components/Price";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <NavigationBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route path="/Menu">
                <Menu />
              </Route>
              <Route path="/Precio">
                <Price />
              </Route>
              <Route path="/Contacto">
                <Contact />
              </Route>
              <Route exact path="/" active>
                <Home />
              </Route>
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
