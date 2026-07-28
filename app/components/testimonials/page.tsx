'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
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
    id: 1,
    quote:
      "Working with me transformed TechUncut completely. I restructured our video hooks and pacing, which boosted our channel's average view duration by 45% within just two months of collaborating.",
    name: 'Marcus Vance',
    role: 'Creator & Founder',
    company: 'TechUncut (1.2M Subs)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300',
    metrics: '+45% Retention',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'I delivered high-converting ad edits and short-form reels for Veloce Apparel on tight turnarounds. My edits directly lowered their customer acquisition cost and scaled their return on ad spend.',
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'Veloce Apparel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
    metrics: '3.2x ROAS on Ads',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'I handled full post-production, DaVinci Resolve color grading, and immersive sound design for Apex Media. The cinematic quality I brought to their brand film drove over 2M viral views.',
    name: 'David Miller',
    role: 'Creative Lead',
    company: 'Apex Media',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
    metrics: '2M+ Viral Views',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide loop (pauses when hovered)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Relative positions calculation
  const getCardOffset = (index: number) => {
    const total = testimonials.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) return 0;  // Center Active
    if (diff === 1) return 1;  // Sliding to the Right
    return -1;                 // Fading in from the Left
  };

  return (
    <section 
      id="testimonials" 
      className="relative scroll-mt-20 py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

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
            Here is what my clients say about working together on long-form content, viral reels, and commercial edits.
          </p>
        </motion.div>

        {/* Sliding Horizontal Stage */}
        <div 
          className="relative h-[380px] sm:h-[320px] w-full flex items-center justify-center perspective-[1000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((item, index) => {
            const offset = getCardOffset(index);
            const isCenter = offset === 0;
            const isRight = offset === 1;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: isCenter ? '0%' : isRight ? '70%' : '-70%',
                  scale: isCenter ? 1 : 0.82,
                  opacity: isCenter ? 1 : 0.2,
                  zIndex: isCenter ? 30 : 10,
                  filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="absolute w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col justify-between"
              >
                {/* Image Card Header Styling */}
                <div className="p-6 sm:p-8 space-y-5">
                  
                  {/* Top Bar: Stars on Left, Optional Metric Badge on Right */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {item.metrics && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-600/20 text-sky-400 border border-blue-500/30">
                        {item.metrics}
                      </span>
                    )}
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Footer matching Image Card Design */}
                <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-sky-400/40 shadow-md"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role} · <span className="text-slate-500">{item.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}