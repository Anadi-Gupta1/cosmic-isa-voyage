
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Alexia Rivers",
      role: "Club President",
      bio: "Astrophysicist specializing in exoplanet research with over 15 years of experience in observational astronomy.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Marcus Chen",
      role: "Technical Lead",
      bio: "Aerospace engineer and amateur astronomer who loves building telescopes and organizing star parties.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Sophia Patel",
      role: "Education Coordinator",
      bio: "Physics teacher with a passion for making complex astronomical concepts accessible to everyone.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "James Wilson",
      role: "Events Manager",
      bio: "Former planetarium director who excels at creating immersive cosmic experiences for club members.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];
  
  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-space-deep-blue to-transparent z-10"></div>
      <div className="absolute w-72 h-72 rounded-full bg-space-accent/10 blur-3xl left-10 top-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
          <div className="w-20 h-1 bg-space-pink mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-white/80 text-lg">
            Passionate experts and enthusiasts who guide our community's cosmic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-full aspect-square border-2 border-transparent group-hover:border-space-accent transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-deep-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-space font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-space-accent">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
