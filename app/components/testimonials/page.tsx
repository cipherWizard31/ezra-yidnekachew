'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  metrics?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The edits completely transformed our YouTube channel. Pacing and hooks are on point—our average view duration jumped by 45% in just two months!',
    name: 'Marcus Vance',
    role: 'Creator & Founder',
    company: 'TechUncut (1.2M Subs)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300',
    metrics: '+45% Retention',
    rating: 5,
  },
  {
    quote:
      'Extremely reliable and super fast turnaround. Delivered high-converting ad edits that lowered our CAC on Instagram reels significantly.',
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'Veloce Apparel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
    metrics: '3.2x ROAS on Ads',
    rating: 5,
  },
  {
    quote:
      'The DaVinci color grading and sound design added a film-grade polish to our indie brand film. Absolute pleasure to work with on Frame.io!',
    name: 'David Miller',
    role: 'Creative Lead',
    company: 'Apex Media',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
    metrics: '2M+ Viral Views',
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="relative scroll-mt-20 py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-125 h-125 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-16 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Creators & Brands
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Here is what clients say about working together on long-form content, viral reels, and commercial edits.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-lg transition-colors hover:border-blue-500/50 hover:bg-slate-900/80 flex flex-col justify-between"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-sky-500/10 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Star Ratings & Metric Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {item.metrics && (
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-600/20 text-sky-400 border border-blue-500/30">
                      {item.metrics}
                    </span>
                  )}
                </div>

                {/* Quote Body */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-sky-400/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role} · <span className="text-slate-500">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}