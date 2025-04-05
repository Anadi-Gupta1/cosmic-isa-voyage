
import React from 'react';
import { Rocket, Star, Telescope } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-space-deep-blue to-transparent z-10"></div>
      <div className="absolute w-96 h-96 rounded-full bg-space-purple/20 blur-3xl -top-10 -right-20"></div>
      <div className="absolute w-64 h-64 rounded-full bg-space-blue/30 blur-2xl bottom-10 -left-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4 text-white">About ISA Club</h2>
          <div className="w-20 h-1 bg-space-accent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-white/80 text-lg">
            The Interstellar SpaceTech Astronomy Club brings together enthusiasts, students, and professionals 
            who share a passion for the cosmic frontier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl p-6 md:p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-space-blue flex items-center justify-center mb-6 mx-auto">
              <Star size={28} className="text-space-accent" />
            </div>
            <h3 className="font-space text-xl font-semibold mb-4 text-center text-white">Our Vision</h3>
            <p className="text-white/70 text-center">
              To inspire curiosity about the cosmos and foster a community where knowledge about space science is shared, 
              discussed, and celebrated.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card rounded-2xl p-6 md:p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-space-blue flex items-center justify-center mb-6 mx-auto">
              <Rocket size={28} className="text-space-pink" />
            </div>
            <h3 className="font-space text-xl font-semibold mb-4 text-center text-white">Our Mission</h3>
            <p className="text-white/70 text-center">
              To make astronomy accessible to everyone through hands-on experiences, educational programs, 
              and collaborative exploration of the universe.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card rounded-2xl p-6 md:p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-space-blue flex items-center justify-center mb-6 mx-auto">
              <Telescope size={28} className="text-space-stars" />
            </div>
            <h3 className="font-space text-xl font-semibold mb-4 text-center text-white">Our Community</h3>
            <p className="text-white/70 text-center">
              A diverse group of space enthusiasts from all backgrounds and experience levels, 
              united by our shared fascination with the cosmos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
