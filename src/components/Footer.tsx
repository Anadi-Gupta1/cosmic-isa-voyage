
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-space-deep-blue py-8 md:py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img
              src="/lovable-uploads/d6858e80-6e40-4ac7-99bf-2b9deb77c97f.png"
              alt="ISA Club Logo"
              className="h-10 w-auto"
            />
            <div className="text-white">
              <p className="font-space font-bold">ISA CLUB</p>
              <p className="text-xs text-white/60">Interstellar SpaceTech Astronomy</p>
            </div>
          </div>
          
          <div>
            <ul className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <li><a href="#home" className="text-white/60 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-white transition-colors text-sm">Gallery</a></li>
              <li><a href="#team" className="text-white/60 hover:text-white transition-colors text-sm">Team</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div className="text-white/60 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} ISA Club. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
