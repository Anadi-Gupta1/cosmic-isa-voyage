
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-space-deep-blue/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/d6858e80-6e40-4ac7-99bf-2b9deb77c97f.png"
            alt="ISA Club Logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-space font-bold tracking-wider text-white hidden md:inline-block">
            ISA CLUB
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-space-accent transition-colors font-medium text-sm tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Join Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-space-accent text-white px-5 py-2 rounded-full hover:bg-space-accent/80 transition-all font-medium text-sm"
          >
            Join the Club
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-space-deep-blue/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-space-accent transition-colors font-medium text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-space-accent text-white px-5 py-2 rounded-full hover:bg-space-accent/80 transition-all font-medium text-base text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Club
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
