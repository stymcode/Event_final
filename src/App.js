import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesSecond from './components/FeaturesSecond';
import NewItems from './components/NewItems';
import Products from './components/Products';
import Testimonial from './components/Testimonial';



const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
  
    
    </div>
  );
};

export default App;
