import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Price from "./Price";
import Menu from "./Menu";
import Contact from "./Contact";

const Pages = ({ pathLink = "/" }) => {
  const currentPage = () => {
    if (pathLink === "/") {
      return <Home />;
    } else if (pathLink === "/Menu") {
      return <Menu />;
    } else if (pathLink === "/Precio") {
      return <Price />;
    } else if (pathLink === "/Contacto") {
      return <Contact />;
    } else {
      return null;
    }
  };
  return (
    <Router>
      <Switch>
        <Route path={pathLink}>{currentPage()}</Route>
      </Switch>
    </Router>
  );
};

export default Pages;
