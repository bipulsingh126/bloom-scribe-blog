import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from 'next-themes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  // Update page background color when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--page-bg-color', 
      theme === 'dark' ? 'hsl(40 6% 15%)' : 'hsl(42 33% 99%)'
    );
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen transition-opacity duration-500 animate-fade-in">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
