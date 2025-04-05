
import React from 'react';
import { Telescope, Satellite, GalleryHorizontal, CircleDot } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Telescope className="h-8 w-8 text-space-accent" />,
      title: "Stargazing Events",
      description: "Monthly outings to dark-sky locations with telescopes and expert guidance for optimal celestial observation."
    },
    {
      icon: <GalleryHorizontal className="h-8 w-8 text-space-pink" />,
      title: "Educational Workshops",
      description: "Regular workshops covering topics from basic astronomy to advanced astrophotography techniques."
    },
    {
      icon: <Satellite className="h-8 w-8 text-space-accent" />,
      title: "Guest Lecturers",
      description: "Talks and Q&A sessions with renowned astronomers, astrophysicists, and space industry professionals."
    },
    {
      icon: <CircleDot className="h-8 w-8 text-space-pink" />,
      title: "Online Community",
      description: "Access to our online platform for discussions, resource sharing, and connecting with fellow astronomy enthusiasts."
    }
  ];
  
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-space-blue">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-space-deep-blue to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-space-deep-blue to-transparent z-10"></div>
      <div className="absolute w-96 h-96 rounded-full bg-space-accent/5 blur-3xl right-10 bottom-10"></div>
      <div className="absolute w-64 h-64 rounded-full bg-space-pink/5 blur-3xl left-10 top-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4 text-white">What We Offer</h2>
          <div className="w-20 h-1 bg-space-accent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-white/80 text-lg">
            Discover the array of opportunities and resources available to ISA Club members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex items-start gap-4"
            >
              <div className="rounded-lg p-3 bg-space-deep-blue/50">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-space font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional features showcase */}
        <div className="mt-16 glass-card rounded-xl p-8 text-center">
          <h3 className="font-space text-2xl font-semibold text-white mb-6">And Much More!</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Astronomy Equipment Lending", 
              "Research Opportunities", 
              "Field Trips", 
              "Annual Space Conference", 
              "Observation Journals", 
              "Astro-photography Sessions", 
              "Member Discounts", 
              "Children's Programs"
            ].map((item, index) => (
              <div key={index} className="py-3 px-4 rounded-full bg-space-deep-blue/50 text-white/90 text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
