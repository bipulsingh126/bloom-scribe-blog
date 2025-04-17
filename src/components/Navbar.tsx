
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="blog-container py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="font-serif text-2xl font-bold text-blog-brown">
              IndiaBloom
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "nav-link-active" : "nav-link"
            }>
              Home
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => 
              isActive ? "nav-link-active" : "nav-link"
            }>
              Blog
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "nav-link-active" : "nav-link"
            }>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "nav-link-active" : "nav-link"
            }>
              Contact
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link-active" : "nav-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  isActive ? "nav-link-active" : "nav-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "nav-link-active" : "nav-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "nav-link-active" : "nav-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
