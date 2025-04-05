
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

// New sections for the additional navigation items
const Shop = () => (
  <section id="shop" className="py-24 relative">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-space font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
        Shop Space Merchandise
      </h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
        Explore our collection of astronomy-themed merchandise, telescopes, and educational materials.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="glass-card rounded-xl overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-space-purple/50 to-space-blue/30"></div>
            <div className="p-4">
              <h3 className="font-medium text-white mb-2">Space Product {item}</h3>
              <p className="text-white/60 text-sm mb-3">High-quality astronomy merchandise</p>
              <p className="text-space-accent font-medium">$99.00</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#" className="inline-block bg-space-accent text-white px-6 py-3 rounded-full hover:bg-space-accent/80 transition-all">
          View All Products
        </a>
      </div>
    </div>
  </section>
);

const Courses = () => (
  <section id="courses" className="py-24 bg-space-blue/10 relative">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-space font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
        Astronomy Courses
      </h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
        Expand your knowledge of the cosmos with our expert-led courses for all levels.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Introduction to Astronomy", level: "Beginner", duration: "4 weeks" },
          { title: "Stellar Evolution", level: "Intermediate", duration: "6 weeks" },
          { title: "Astrophysics & Cosmology", level: "Advanced", duration: "10 weeks" }
        ].map((course, index) => (
          <div key={index} className="glass-card rounded-xl p-6 transition-all hover:bg-white/10">
            <div className="w-12 h-12 bg-space-accent/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-space-accent font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{course.title}</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-white/10 rounded-md text-xs">{course.level}</span>
              <span className="px-2 py-1 bg-white/10 rounded-md text-xs">{course.duration}</span>
            </div>
            <p className="text-white/60 text-sm mb-4">Learn about the wonders of space and astronomy with our structured curriculum.</p>
            <a href="#" className="text-space-accent hover:underline text-sm font-medium">Learn more →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Events = () => (
  <section id="events" className="py-24 relative">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-space font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
        Upcoming Events
      </h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
        Join us for star-gazing nights, space talks, and astronomical observations.
      </p>
      <div className="space-y-6">
        {[
          { title: "Meteor Shower Watch", date: "April 22, 2025", location: "Observatory Hill" },
          { title: "Solar Eclipse Viewing", date: "May 15, 2025", location: "Science Center" },
          { title: "Night Sky Photography Workshop", date: "June 5, 2025", location: "ISA Club HQ" }
        ].map((event, index) => (
          <div key={index} className="glass-card rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 bg-space-accent/20 rounded-full flex flex-col items-center justify-center shrink-0">
              <span className="text-space-accent font-bold text-xl">{index + 22}</span>
              <span className="text-white/60 text-xs">APR</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-medium text-white mb-1">{event.title}</h3>
              <p className="text-white/60 text-sm">{event.location}</p>
            </div>
            <a href="#" className="px-5 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white text-sm shrink-0">
              Register Now
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#" className="inline-block border border-space-accent/50 text-white px-6 py-3 rounded-full hover:bg-space-accent/20 transition-all">
          View All Events
        </a>
      </div>
    </div>
  </section>
);

const NasaEyes = () => (
  <section id="nasa-eyes" className="py-16 md:py-24 relative">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-space font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
        Explore the Solar System
      </h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-8">
        Experience NASA's interactive 3D visualization of our solar system.
      </p>
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg max-w-5xl mx-auto">
        <iframe 
          src="https://eyes.nasa.gov/apps/solar-system/#/home?interactPrompt=true&surfaceMapTiling=true&hd=true" 
          className="w-full min-h-[70vh]" 
          title="NASA Eyes on the Solar System"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Background />
      <NavBar />
      <Hero />
      <About />
      <Courses />
      <Events />
      <Gallery />
      <Team />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
