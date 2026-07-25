'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

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
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-center px-3 py-2 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 shadow-2xl">
        <ul className="flex items-center gap-1 text-sm font-medium py-2">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-white transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 shadow-md shadow-blue-500/20'
                      : 'hover:bg-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}