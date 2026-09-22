'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'tech', 'work', 'contact'];
      
      // Find which section is currently in view
      let currentSection = 'about'; // default to about
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the upper half of viewport
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);

      // Hide navbar on scroll down, show on scroll up
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar if mouse is near the top
      if (e.clientY < 100) {
        setIsVisible(true);
      }
    };

    // Call once on mount to set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-6 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="flex justify-between items-center px-8 py-3 rounded-full shadow-lg gap-15" style={{ backgroundColor: 'var(--nav-bg)' }}>
        <div className="text-4xl font-bold whitespace-nowrap" style={{ color: 'var(--nav-text)' }}>ynha</div>
        <div className="flex gap-1" style={{ color: 'var(--nav-text)', fontFamily: 'var(--font-atkinson)' }}>
          <a 
            href="#about" 
            className={`px-4 py-2 rounded-full whitespace-nowrap transition duration-200 ${
              isActive('about') 
                ? 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,247,247,0.8)] transition duration-200' 
                : 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,247,247,0.8)] transition duration-200'
            }`}
            style={{
              backgroundColor: isActive('about') ? 'var(--nav-highlight)' : 'transparent',
              color: isActive('about') ? 'var(--nav-bg)' : 'var(--nav-text)'
            }}
          >
            about me
          </a>
          <a 
            href="#tech" 
            className={`px-4 py-2 rounded-full whitespace-nowrap transition duration-200 ${
              isActive('tech') 
                ? 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,247,247,0.8)] transition duration-200' 
                : 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,247,247,0.8)] transition duration-200'
            }`}
            style={{
              backgroundColor: isActive('tech') ? 'var(--nav-highlight)' : 'transparent',
              color: isActive('tech') ? 'var(--nav-bg)' : 'var(--nav-text)'
            }}
          >
            my tech stack
          </a>
          <a 
            href="#work" 
            className={`px-4 py-2 rounded-full whitespace-nowrap transition duration-200 ${
              isActive('work') 
                ? 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,247,247,0.8)] transition duration-200' 
                : 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,247,247,0.8)] transition duration-200'
            }`}
            style={{
              backgroundColor: isActive('work') ? 'var(--nav-highlight)' : 'transparent',
              color: isActive('work') ? 'var(--nav-bg)' : 'var(--nav-text)'
            }}
          >
            projects
          </a>
          <a 
            href="#contact" 
            className={`px-4 py-2 rounded-full whitespace-nowrap transition duration-200 ${
              isActive('contact') 
                ? 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,247,247,0.8)] transition duration-200' 
                : 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,247,247,0.8)] transition duration-200'
            }`}
            style={{
              backgroundColor: isActive('contact') ? 'var(--nav-highlight)' : 'transparent',
              color: isActive('contact') ? 'var(--nav-bg)' : 'var(--nav-text)'
            }}
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}
