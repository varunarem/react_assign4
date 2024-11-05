import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const featuredProducts = [
  {
    id: 101,
    name: "Wireless Earbuds",
    description: "Noise-cancelling, water-resistant, and long battery life.",
    price: 59.99,
    image: "./Images/earbuds.jpg",
  },
  {
    id: 102,
    name: "Smart Home Speaker",
    description: "Voice-controlled speaker with smart home capabilities.",
    price: 89.99,
    image: "./Images/homespeaker.jpg",
  },
  {
    id: 103,
    name: "Fitness Tracker",
    description: "Track your steps, heart rate, and calories burned.",
    price: 39.99,
    image: "./Images/fitnesstracker.jpg",
  },
];

function FeaturedProducts() {
  return (
    <Container className="py-5" id="featured-products">
      <h2 className="text-center mb-4">Featured Products</h2>
      <Row>
        {featuredProducts.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="featured-product-card mb-4">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title className="text-center">{product.name}</Card.Title>
                <Card.Text className="text-center">{product.description}</Card.Text>
                <Card.Text className="text-center text-muted">${product.price}</Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="primary">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedProducts;