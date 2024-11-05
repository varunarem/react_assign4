import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const testimonials = [
  {
    id: 1,
    name: "Maheshbabu",
    title: "South Indian Actor",
    review: "The best online shopping experience! I love the product quality and fast delivery.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "Sachin Tendulkar",
    title: "Legendary Indian Cricketer",
    review: "Amazing customer service and high-quality products. I’ll definitely be back for more!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Rahul Gandhi",
    title: "Indian Politician",
    review: "Impressed with the variety and affordability. Highly recommended!",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function Testimonials() {
  return (
    <Container className="py-5" id="testimonials">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Carousel>
        {testimonials.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <div className="text-center">
              <p className="testimonial-text">"{testimonial.review}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <p className="testimonial-title"> {testimonial.title}</p>
              <p className="testimonial-rating">{testimonial.rating}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Testimonials;