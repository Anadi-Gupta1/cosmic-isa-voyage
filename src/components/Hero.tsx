
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Create stars for the background
    const createStars = () => {
      const starsContainer = document.querySelector('.stars-container');
      if (!starsContainer) return;
      
      // Clear existing stars
      starsContainer.innerHTML = '';
      
      // Create stars with different sizes
      const starCount = window.innerWidth < 768 ? 100 : 200;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random();
        let sizeClass = 'star-small';
        
        if (size > 0.9) {
          sizeClass = 'star-large';
        } else if (size > 0.6) {
          sizeClass = 'star-medium';
        }
        
        star.className = `star ${sizeClass}`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Add animation with random delay
        star.style.animation = `twinkle ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 5}s infinite`;
        
        starsContainer.appendChild(star);
      }
    };
    
    createStars();
    
    // Re-create stars on window resize for responsiveness
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden">
      {/* NASA Eyes 3D Model in Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <iframe 
          src="https://eyes.nasa.gov/apps/solar-system/#/home?interactPrompt=true&surfaceMapTiling=true&hd=true" 
          className="w-full h-full"
          title="NASA Eyes on the Solar System"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: "none" }} // Disable interaction with the iframe in background
        ></iframe>
      </div>
      
      {/* Stars background */}
      <div className="stars-container"></div>
      
      {/* Floating planets/objects */}
      <div 
        className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-space-purple/30 blur-2xl top-1/4 -left-10 animate-float" 
        style={{ animationDelay: '0s' }}
      ></div>
      <div 
        className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full bg-space-accent/20 blur-2xl bottom-1/4 -right-10 animate-float" 
        style={{ animationDelay: '2s' }}
      ></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-8 rounded-xl">
          <h1 className="font-space font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Explore the Universe with ISA Club
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Join a community passionate about astronomy, space technology, and the wonders of the cosmos. 
            Together, we explore, learn, and chart the stars.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#features" 
              className="px-8 py-3 bg-space-accent text-white font-medium rounded-full hover:bg-space-accent/80 transition-all transform hover:scale-105"
            >
              Discover More
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/60 hover:text-white/100 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
