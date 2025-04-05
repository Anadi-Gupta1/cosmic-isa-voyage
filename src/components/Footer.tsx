
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-space-deep-blue py-8 md:py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
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
            <p className="text-white/60 text-sm mb-4">
              Join a community passionate about astronomy, space technology, and the wonders of the cosmos. 
              Together, we explore, learn, and chart the stars.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://www.instagram.com/isa.astrospace?igsh=cGgyeDB3M2d4dDJ5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-space-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://chat.whatsapp.com/L3cBfJnQuO3BAbTnr4FbUE?fbclid=PAZXh0bgNhZW0CMTEAAabtBxDh4K2fihtHj_B3jxL87pA6nBaZurvhwesU32G5CftYqkhHFxdlicg_aem_v3_CsBh8Vl8Pxnf3HD8Ltg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-space-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.6 6.8A7.8 7.8 0 0 0 12 4c-4.42 0-8 3.58-8 8a8 8 0 0 0 1.2 4.2L4 22l5.8-1.5A8 8 0 0 0 20 12c0-2.2-.9-4.2-2.4-5.2"></path>
                  <path d="M15 10c-.6-1-1-1.4-1.6-1.5-.4-.1-.9 0-1.4.3-.7.4-2 1.2-2 3.2 0 1.5.5 2.5 1.5 2.7.3 0 .6-.2 1-.4l.8-.6c.3-.2.4-.3.6-.3s.5.3.8.7c.3.4.7.9 1 1.3.2.3.3.4.4.5.4.3.7.3 1 .2 1.3-.5 1.7-2.5.4-5.3-.5-1.2-1.1-2-1.9-2.8-.5-.5-.8-.8-1.6-1.6"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><a href="#shop" className="text-white/60 hover:text-white transition-colors text-sm">Shop</a></li>
              <li><a href="#courses" className="text-white/60 hover:text-white transition-colors text-sm">Courses</a></li>
              <li><a href="#events" className="text-white/60 hover:text-white transition-colors text-sm">Events</a></li>
              <li><a href="#webinars" className="text-white/60 hover:text-white transition-colors text-sm">Webinars</a></li>
              <li><a href="#blog" className="text-white/60 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-white transition-colors text-sm">Gallery</a></li>
              <li><a href="#team" className="text-white/60 hover:text-white transition-colors text-sm">Team</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-white font-medium text-lg mb-4">Contact Us</h3>
            <p className="text-white/60 text-sm mb-2">Email: info@isaclub.com</p>
            <p className="text-white/60 text-sm mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-white/60 text-sm">Location: Space Center, Planet Earth</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ISA Club. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a href="#terms" className="text-white/60 hover:text-white transition-colors text-xs">Terms of Service</a>
            <a href="#privacy" className="text-white/60 hover:text-white transition-colors text-xs">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
