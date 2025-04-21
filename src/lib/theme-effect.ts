/**
 * Theme transition utility
 * Adds subtle visual effects when switching between light and dark themes
 */

// Apply a ripple effect when changing themes
export function applyThemeChangeEffect() {
  const body = document.body;
  
  // Create ripple element
  const ripple = document.createElement('div');
  
  // Get current theme
  const isDark = document.documentElement.classList.contains('dark');
  
  // Set ripple style based on theme
  ripple.className = 'theme-change-ripple';
  ripple.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    pointer-events: none;
    z-index: 9999;
    transition: opacity 600ms ease-out;
    background: ${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
  `;
  
  // Add ripple to body
  body.appendChild(ripple);
  
  // Trigger animation
  setTimeout(() => {
    ripple.style.opacity = '1';
  }, 10);
  
  // Clean up after animation
  setTimeout(() => {
    ripple.style.opacity = '0';
    setTimeout(() => {
      body.removeChild(ripple);
    }, 600);
  }, 600);
}

// Optional theme transition functions that can be added later
export const themeEffects = {
  ripple: applyThemeChangeEffect,
  // Add more effects here as needed
}; 