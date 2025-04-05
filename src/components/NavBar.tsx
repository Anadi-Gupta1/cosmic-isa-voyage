
import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, User, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimize scroll event with throttling
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".mobile-menu") && !target.closest(".menu-toggle")) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Updated navigation items - removed webinars and blog
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Shop", href: "#shop" },
    { name: "Courses", href: "#courses" },
    { name: "Events", href: "#events" },
    { name: "Features", href: "#features" },
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
        {/* Logo with animated hover effect */}
        <a 
          href="#home" 
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/lovable-uploads/d6858e80-6e40-4ac7-99bf-2b9deb77c97f.png"
            alt="ISA Club Logo"
            className="h-12 w-auto filter drop-shadow-lg"
          />
          <span className="text-xl font-space font-bold tracking-wider text-white hidden md:inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            ISA CLUB
          </span>
        </a>

        {/* Desktop Navigation Menu with dropdowns */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-white/90 hover:text-space-accent transition-all duration-200 px-3 py-2 text-sm font-medium tracking-wide"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Login/Profile Button & Join Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors group"
            aria-label="Login or Profile"
          >
            <User 
              size={18} 
              className="transition-transform group-hover:scale-110 duration-200" 
            />
            <span className="group-hover:text-space-accent transition-colors">Login</span>
          </a>
          <a
            href="#contact"
            className="bg-space-accent hover:bg-space-accent/90 text-white px-5 py-2 rounded-full transition-all duration-200 font-medium text-sm shadow-lg hover:shadow-space-accent/20 hover:-translate-y-0.5"
          >
            Join the Club
          </a>
        </div>

        {/* Mobile Menu Toggle with animation */}
        <button
          className="lg:hidden text-white p-2 menu-toggle focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="animate-fade-in" />
          ) : (
            <Menu size={24} className="animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile Menu with improved animation */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden absolute top-full left-0 right-0 mobile-menu bg-space-deep-blue/95 backdrop-blur-lg shadow-xl animate-slide-down"
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            transform: "translateY(0)",
            animation: "slideDown 0.3s ease-out forwards"
          }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-space-accent transition-colors font-medium text-base py-3 px-4 hover:bg-white/5 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animation: "fadeInRight 0.3s ease-out forwards",
                  opacity: 0,
                  transform: "translateX(10px)"
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-white/10 my-2 pt-2"></div>
            <a
              href="#login"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User size={18} />
              <span>Login</span>
            </a>
            <a
              href="#contact"
              className="bg-space-accent text-white px-5 py-3 rounded-lg hover:bg-space-accent/80 transition-all font-medium text-base text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Club
            </a>
          </div>
        </div>
      )}

      {/* Fix the CSS animation syntax by using the correct style format */}
      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes fadeInRight {
            from { transform: translateX(10px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          .animate-slide-down {
            animation: slideDown 0.3s ease-out forwards;
          }
          
          .animate-fade-in {
            animation: fadeIn 0.2s ease-out forwards;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
