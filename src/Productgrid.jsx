import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './Productcard.jsx'


const products = [
  {
    id: 1,
    name: "Premium Headphones",
    description: "High-quality sound with noise cancellation.",
    price: 129.99,
    image: "./Images/headphones.jpg",
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your health and fitness activities.",
    price: 89.99,
    image: "./Images/smartwatch.jpg",
  },
  {
    id: 3,
    name: "Wireless Speaker",
    description: "Enjoy music on the go with this portable speaker.",
    price: 59.99,
    image: "./Images/wirelessspeaker.jpg",
  },
  {
    id: 4,
    name: "Gaming Controller",
    description: "Ergonomic design for long gaming sessions.",
    price: 49.99,
    image: "./Images/gamingcontroller.jpg",
  },
];

function Productgrid(){

    return (
    <div>
      <Container id="products" className="py-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>

    </div>
  )
}

export default Productgrid
