'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Video } from 'lucide-react';
import { FaYoutube, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com' },
  { name: 'X (Twitter)', icon: FaXTwitter, href: 'https://x.com' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 text-slate-400 py-12 px-4 sm:px-6 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-8 z-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">
                YourName<span className="text-sky-400">.Edit</span>
              </span>
              <p className="text-xs text-slate-500">Video Editor & Post-Production Specialist</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 hover:bg-blue-600 hover:text-white transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>

      </div>
    </footer>
  );
}