'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Trigger threshold offset

      // Check sections in reverse order to catch lower elements first when scrolling down
      const sections = navItems.map((item) => item.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-center px-3 py-1.5 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 shadow-2xl">
        <ul className="flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`relative z-10 block px-4 py-2 rounded-full text-white transition-opacity duration-200 ${
                    isActive ? 'opacity-100 font-semibold' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {item.label}
                </Link>

                {/* Animated Sliding Blue Pill */}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 z-0 bg-blue-600 rounded-full shadow-md shadow-blue-500/20"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}