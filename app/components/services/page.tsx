'use client';

import { motion } from 'framer-motion';
import { 
  Megaphone, 
  BarChart3, 
  PenTool, 
  Users, 
  Target, 
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Social Media Strategy',
    description:
      'Strategic, data-driven social media management designed to grow your audience, strengthen your brand, and convert engagement into measurable business results.',
    tags: ['Audience Research', 'Content Pillars', 'Competitor Analysis'],
  },
  {
    icon: PenTool,
    title: 'Content Creation & Curation',
    description:
      'High-quality graphics, reels, carousels, and compelling copy designed to capture attention, engage your audience, and maintain a consistent brand identity across every platform.',
    tags: ['Copywriting', 'Graphic Design', 'Short-Form Video'],
  },
  {
    icon: Megaphone,
    title: 'Full Account Management',
    description:
      'From content planning to daily management, I handle every aspect of your social media so you can focus on running your business',
    tags: ['Content Calendar', 'Scheduling', 'Cross-Platform'],
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description:
      'Build stronger relationships with your audience through meaningful interactions, timely responses, and proactive engagement that fosters trust and long-term loyalty.',
    tags: ['DM Management', 'Audience Growth', 'Active Outreach'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Monthly Reporting',
    description:
      'Detailed tracking of key metrics, performance trends, and growth insights to continually refine and optimize your social strategy.',
    tags: ['KPI Tracking', 'Growth Reports', 'Performance Audits'],
  }
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
    transition: { duration: 0.5, ease: 'easeOut' as const},
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
            Social Media Management Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Comprehensive solutions designed to elevate your brand presence, engage your audience, and drive real business growth.
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