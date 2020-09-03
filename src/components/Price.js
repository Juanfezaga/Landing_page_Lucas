import React from "react";
import Carousel from "react-bootstrap/Carousel";

const prices = [
  {
    src: "/images/PizzaMenu1.jpg",
    title: "Pizza de Tocino y Carne Molida",
    price: "$ 15",
    alt: "Pizza",
  },
  {
    src: "/images/PizzaMenu2.jpg",
    title: "Pizza Vegetariana",
    price: "$ 10",
    alt: "Pizza",
  },
  {
    src: "/images/PizzaMenu3.jpg",
    title: "Pollo y Champiñones",
    price: "$ 13.50",
    alt: "Pizza",
  },
  {
    src: "/images/PizzaMenu4.jpg",
    title: "Favorito de Lucas's",
    price: "$ 18",
    alt: "Pizza",
  },
  {
    src: "/images/PizzaMenu5.jpg",
    title: "Pizza Pepperoni",
    price: "$ 12",
    alt: "Pizza",
  },
  {
    src: "/images/PizzaMenu6.jpg",
    title: "Pizza Pomodoro",
    price: "$ 13.50",
    alt: "Pizza",
  },
];

const renderPrice = prices.map((price) => (
  <Carousel.Item>
    <img className="d-block w-100 h-20" src={price.src} alt={price.alt} style={{height: '500px'}} />
    <Carousel.Caption>
      <h3>{price.title}</h3>
      <h2>{price.price}</h2>
    </Carousel.Caption>
  </Carousel.Item>
));

const Price = () => {
  return <Carousel>{renderPrice}</Carousel>;
};

export default Price;
