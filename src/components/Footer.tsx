
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
    <footer className="bg-blog-beige mt-16">
      <div className="blog-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">BloomScribe</h3>
            <p className="text-foreground/80 mb-4">
              A personal blog sharing thoughts and insights on mindful living, creativity, and personal growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blog-green hover:text-blog-sage transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blog-green hover:text-blog-sage transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blog-green hover:text-blog-sage transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@bloomscribe.com" className="text-blog-green hover:text-blog-sage transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-blog-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/80 hover:text-blog-green transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-blog-green transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-blog-green transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/80 hover:text-blog-green transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog/cultivating-mindfulness" className="text-foreground/80 hover:text-blog-green transition-colors">Cultivating Mindfulness in Daily Life</Link>
              </li>
              <li>
                <Link to="/blog/sustainable-living" className="text-foreground/80 hover:text-blog-green transition-colors">10 Steps to More Sustainable Living</Link>
              </li>
              <li>
                <Link to="/blog/morning-routine" className="text-foreground/80 hover:text-blog-green transition-colors">The Perfect Morning Routine</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 text-center text-foreground/70 text-sm">
          <p>© {currentYear} BloomScribe. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-blog-green" /> by BloomScribe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
