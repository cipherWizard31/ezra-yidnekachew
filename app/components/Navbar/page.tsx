'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (isManualScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const sectionId = item.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false); // Close mobile sidebar on selection
    isManualScroll.current = true;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 800);
  };

  return (
    <>
      {/* 1. Desktop Floating Nav Bar (Hidden on screens below 'lg' break point) */}
      <div className="hidden lg:flex fixed top-5 inset-x-0 z-50 justify-center px-4">
        <nav className="flex items-center justify-center px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(sectionId)}
                    className={`relative z-10 block px-4 py-2 rounded-full text-white transition-opacity duration-200 ${
                      isActive ? 'opacity-100 font-semibold' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {item.label}
                  </Link>

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

      {/* 2. Mobile Floating Toggle Bar (Visible on smaller screens) */}
      <div className="lg:hidden fixed top-5 inset-x-4 z-50 flex justify-between items-center px-5 py-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl">
        <span className="text-sm font-bold text-white tracking-wider uppercase">
          {navItems.find((item) => item.href.substring(1) === activeSection)?.label || 'Menu'}
        </span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="p-2 text-slate-300 hover:text-white rounded-full bg-white/5 border border-white/10 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 3. Mobile Sidebar Drawer & Dark Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden"
            />

            {/* Sliding Sidebar */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-slate-900 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div className="space-y-6 pt-16">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-widest px-3">
                  Navigation
                </div>

                <ul className="space-y-2">
                  {navItems.map((item) => {
                    const sectionId = item.href.substring(1);
                    const isActive = activeSection === sectionId;

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => handleNavClick(sectionId)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                            isActive
                              ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}