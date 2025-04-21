
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blog-beige dark:bg-background mt-16">
      <div className="blog-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 dark:text-foreground">IndiaBloom</h3>
            <p className="text-foreground/80 mb-4">
              A celebration of Indian perspectives on mindful living, creativity, and personal growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blog-brown hover:text-blog-light-brown dark:text-primary dark:hover:text-primary/80 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blog-brown hover:text-blog-light-brown dark:text-primary dark:hover:text-primary/80 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blog-brown hover:text-blog-light-brown dark:text-primary dark:hover:text-primary/80 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@indiabloom.com" className="text-blog-brown hover:text-blog-light-brown dark:text-primary dark:hover:text-primary/80 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 dark:text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 dark:text-foreground">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Ayurveda</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Indian Cuisine</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Yoga & Meditation</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Sustainable Living</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-blog-brown dark:text-foreground/80 dark:hover:text-primary transition-colors">Travel</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 text-center text-foreground/70 dark:text-foreground/60 text-sm">
          <p>© {currentYear} IndiaBloom. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-blog-brown dark:text-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
