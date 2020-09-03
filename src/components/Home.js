import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./JumbotronImage.css";

const Home = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
  };
  return (
    <Jumbotron fluid className="cover-image">
      <div style={styles}>
        <h1 style={{ textAlign: "center" }}>Welcome to Lucas Pizzeria</h1>
        <h3 style={{ textAlign: "center" }}>
          Lucas Pizzeria es una compañía de franquicias de restaurantes
          estadounidenses. Es una cadena de comida para llevar y reparto a
          domicilio, la cuarta más grande en los Estados Unidos, detrás de Pizza
          Hut, Little Caesars y Domino's Pizza.​
        </h3>
      </div>
    </Jumbotron>
  );
};

export default Home;
