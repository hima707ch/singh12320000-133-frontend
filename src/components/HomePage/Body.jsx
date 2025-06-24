import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import FeaturedProperties from './FeaturedProperties';
import CTA from './CTA';
import Footer from './Footer';
import { useHome } from './useHome';

const Body = () => {
  const { featuredProperties } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <AboutUs />
      <FeaturedProperties properties={featuredProperties} />
      <CTA />
      <Footer />
    </div>
  );
};

export default Body;