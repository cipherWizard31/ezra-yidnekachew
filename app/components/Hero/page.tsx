'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Sparkles, PhoneCallIcon } from 'lucide-react';

const titles = [
  'Video Editor',
  'Social Media Manager',
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Changes title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 px-6"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-75 h-75 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-inner"
        >
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            Available for Freelance & Remote Work
          </span>
        </motion.div>

        {/* Headline with Dynamic Sliding Gradient Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          Ezra Yidnekachew <br />
          <div className="inline-block relative h-[1.3em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[currentTitleIndex]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="inline-block bg-clip-text text-transparent bg-linear-to-r from-sky-400 via-blue-500 to-purple-500"
              >
                {titles[currentTitleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed"
        >
          I'm a professional social media manager and video editor specializing in creating engaging content and compelling narratives for various platforms.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Primary CTA */}
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore Portfolio
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <PhoneCallIcon className="w-4 h-4 fill-current text-sky-400" />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}