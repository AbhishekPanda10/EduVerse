import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;