
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Background />
      <NavBar />
      <Hero />
      <About />
      <Gallery />
      <Team />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
