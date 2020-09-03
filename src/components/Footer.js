import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h1>SERVICIO AL CLIENTE</h1>
            <p>
              Si tienes alguna duda o problema con tu pedido consulta aquí los
              canales de servicio al cliente que tenemos para ayudarte
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Preguntas frecuentes</Card.Title>
                <Card.Text>
                  A continuación encontrarás las respuestas a las preguntas más
                  frecuentes. Te invitamos a que las consultes para resolver
                  cualquier duda.
                </Card.Text>
                <Button variant="teal">Buscar Respuestas</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Grandes ofertas</Card.Title>
                <Card.Text>
                  Se parte del club de miembros Lucas Pizzeria's y enterarte de
                  grandes ofertas
                </Card.Text>
                <Button variant="teal">Suscribete ya</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Sugerencias y reclamos</Card.Title>
                <Card.Text>
                  Tu opinión es muy importante para nosotros. Deja aquí tu
                  petición, queja, reclamo o sugerencia.
                </Card.Text>
                <Button variant="teal">Enviar Mensaje</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Declaración de alérgenos: Apreciado cliente, lo invitamos a que
              tenga en cuenta que en nuestras cocinas se manejan ingredientes
              que contienen: harina de trigo (gluten), trozos de soya, lácteos,
              huevo, maní, nueces, entre otros, que pueden producir alergia.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
