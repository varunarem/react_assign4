import React from 'react'
import Productgrid from './Productgrid';
import Footer from './Footer';
import reactdom from 'react-dom';
import Nav1 from './Navbar';
import FeaturedProducts from './Featuredproducts';
import Testimonials from './Testimonials';


const App = () => {
  return (
    <div>
      <Nav1 />
      <FeaturedProducts />
      <Productgrid />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default App
