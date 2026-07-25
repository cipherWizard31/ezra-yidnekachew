'use client';

import { motion } from 'framer-motion';
import { 
  Video, 
  Sparkles, 
  Palette, 
  Volume2, 
  Film, 
  Zap 
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'YouTube & Long-Form',
    description:
      'Engaging, fast-paced edits designed to maximize retention, click-through rates, and audience engagement.',
    tags: ['Pacing', 'Storytelling', 'B-Roll Integration'],
  },
  {
    icon: Zap,
    title: 'Shorts, Reels & TikToks',
    description:
      'High-energy vertical videos with dynamic captions, sound FX, and hooks tailored for viral social reach.',
    tags: ['Dynamic Captions', 'Fast Cuts', 'Trend Audio'],
  },
  {
    icon: Palette,
    title: 'Cinematic Color Grading',
    description:
      'Professional color correction and cinematic look creation in DaVinci Resolve to set the perfect visual tone.',
    tags: ['DaVinci Resolve', 'Shot Matching', 'LUT Creation'],
  },
  {
    icon: Volume2,
    title: 'Sound Design & Mixing',
    description:
      'Immersive audio design including custom sound effects, crisp voice isolation, and balanced audio leveling.',
    tags: ['SFX Layering', 'Voice Cleanup', 'Audio Leveling'],
  },
  {
    icon: Film,
    title: 'Commercial & Brand Ads',
    description:
      'Sleek, high-converting promotional videos for products, brands, and digital ad campaigns.',
    tags: ['Product Promos', 'Ad Creatives', 'Motion Graphics'],
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics & VFX',
    description:
      'Custom titles, lower thirds, 2D animations, and clean visual effects to elevate overall production value.',
    tags: ['After Effects', 'Title Cards', 'Visual FX'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative scroll-mt-20 py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-125 h-125 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-12 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Editing Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            End-to-end post-production solutions crafted to bring your creative vision to life and hook viewers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-lg transition-colors hover:border-blue-500/50 hover:bg-slate-900/80 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="pt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}