
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Stargazing Night",
      description: "Club members observing the night sky during our monthly stargazing event."
    },
    {
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Space Conference 2024",
      description: "Our team at the International Space Conference presenting research findings."
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Observatory Visit",
      description: "Annual field trip to the National Observatory for hands-on telescope experience."
    },
    {
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Student Workshop",
      description: "Teaching young astronomers about celestial navigation and constellation mapping."
    }
  ];
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };
  
  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-space-blue/30 to-transparent z-10"></div>
      <div className="absolute w-80 h-80 rounded-full bg-space-purple/30 blur-3xl -bottom-40 right-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4 text-white">Our Journey</h2>
          <div className="w-20 h-1 bg-space-accent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-white/80 text-lg">
            Glimpses of our adventures, discoveries and community events as we explore the cosmos together.
          </p>
        </div>
        
        {/* Gallery carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-video">
                <img 
                  src={galleryItems[currentIndex].image} 
                  alt={galleryItems[currentIndex].title} 
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-space font-bold text-white mb-2">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-white/80 max-w-2xl">
                  {galleryItems[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
            aria-label="Previous image"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
            aria-label="Next image"
          >
            <ArrowRight size={20} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-space-accent' : 'bg-white/20'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnails - small screens hide, md+ show */}
        <div className="hidden md:grid grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-lg overflow-hidden border-2 transition-all ${currentIndex === index ? 'border-space-accent scale-105' : 'border-transparent'}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-24 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
