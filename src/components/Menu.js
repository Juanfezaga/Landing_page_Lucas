import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";


const Pizzas = [
    {
        src: '/images/PizzaMenu1.jpg',
        title: 'Pizza de Tocino Y Carne molida',
        text: "Mezcla de tres quesos(Mozarrela, Parmesano y Romano) con Tocino canadiense"
    },
    {
        src: '/images/PizzaMenu2.jpg',
        title: "Pizza Vegetariana",
        text: "Tomate, Ajo, Cebolla, Jalapeños"
    },
    {
        src: "/images/PizzaMenu5.jpg",
        title: "Pollo y Champiñones",
        text: 'Pollo a la parrilla y Champiñones Frescos'
    },
    {
        src: '/images/PizzaMenu4.jpg',
        title: "Favorito de Lucas's",
        text: "Deliciosa Pizza de Receta Original Italiana"
    },
    {
        src: '/images/PizzaMenu3.jpg',
        title: "Pizza Pepperoni",
        text: "Pepperoni, Mezcla de tres quesos, Mozarella, Parmesano y Romano"
    },
    {
        src: '/images/PizzaMenu6.jpg',
        title: "Pizza Pomodoro",
        text: "Tomate, Extra Queso Y Oreganos"
    }
]

const renderMenu = Pizzas.map(pizza => (
    <Card>
        <Card.Img variant="top" src={pizza.src} />
        <Card.Body>
          <Card.Title>{pizza.title}</Card.Title>
          <Card.Text>{pizza.text}</Card.Text>
        </Card.Body>
      </Card>
))

const Menu = () => {
  return (
    <CardColumns>
      {renderMenu}
    </CardColumns>
  );
};

export default Menu;
