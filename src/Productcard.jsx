import React from 'react'
import { Card, Button } from 'react-bootstrap';


function Productcard({product}){
  return (
    <div>
      <Card className="product-card mb-4">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title className="text-center">{product.name}</Card.Title>
        <Card.Text className="text-center">{product.description}</Card.Text>
        <Card.Text className="text-center text-muted">${product.price}</Card.Text>
        <div className="d-grid gap-2">
          <Button variant="primary" className="add-to-cart-btn">
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Productcard
