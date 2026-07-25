'use client';

import { motion } from 'framer-motion';

export default function Showreel() {
  return (
    <section 
       
      className="relative flex items-center justify-center bg-slate-950 px-4 sm:px-6 py-16 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto space-y-6 z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
        id="showreel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
            Featured Reel
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            2026 Editing Showreel
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            A quick compilation highlighting sound design, pacing, color grading, and dynamic visual storytelling.
          </p>
        </motion.div>

        {/* Medium-Sized Video Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 sm:p-3 shadow-xl shadow-blue-950/30 backdrop-blur-sm"
        >
          {/* Responsive 16:9 Aspect Ratio */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/5">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
              title="Featured Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}