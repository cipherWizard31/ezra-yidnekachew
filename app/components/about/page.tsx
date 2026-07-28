'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Video, Calendar, MessageSquare, Clock } from 'lucide-react';

const corePillars = [
  { 
    icon: TrendingUp, 
    title: 'Custom Growth Strategies', 
    description: 'Tailored roadmaps built around your brand identity and target audience.' 
  },
  { 
    icon: Video, 
    title: 'Short-form Video Specialist', 
    description: 'High-retention Reels, TikToks, and Shorts designed to grab attention.' 
  },
  { 
    icon: Calendar, 
    title: 'Content Planning & Scheduling', 
    description: 'Consistent posting schedules and organized content calendars.' 
  },
  { 
    icon: MessageSquare, 
    title: 'Community Management', 
    description: 'Active audience engagement, DM handling, and brand loyalty building.' 
  },
];

const toolStack = [
  'Notion',
  'CapCut',
  'Canva',
  'Photoshop',
  'Premiere',
  'TikTok Studio',
];

export default function About() {
  return (
    <section 
      id="about" 
      className="relative scroll-mt-20 py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-125 h-125 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Bio & Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
              Behind The Strategy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Building online presences that convert and engage.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I’m a Social Media Manager focused on growth strategy, content creation, and community building. Whether it’s creating engaging reels, designing branded assets, or optimizing post schedules, I help brands and creators establish a strong visual identity and meaningfully connect with their audience.
            </p>

            {/* Experience Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-sky-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Experience</p>
                <p className="text-sm font-bold text-sky-300">2+ Years in Social Media Management</p>
              </div>
            </div>

            {/* Software & Tools Badge Stack */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Primary Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {toolStack.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Core Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {corePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg space-y-3 hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}