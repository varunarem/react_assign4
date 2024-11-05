import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light text-center py-4">
      <Container>
        <p>&copy; {new Date().getFullYear()} V-Electronics - All rights reserved</p>
      </Container>
    </footer>

    </div>
  )
}

export default Footer
