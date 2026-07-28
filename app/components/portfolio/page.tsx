'use client';

import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface ClientProject {
  id: string;
  clientName: string;
  role: string;
  tasks: string[];
}

const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 'ende-podcast',
    clientName: 'Ende Podcast',
    role: 'Social Media Management',
    tasks: [
      'Managed social media content',
      'Edited short-form promotional videos',
      'Designed thumbnails and promotional graphics',
      'Helped increase audience engagement through consistent content',
    ],
  },
  {
    id: 'miya-store',
    clientName: 'Miya Store',
    role: 'Social Media & Brand Design',
    tasks: [
      'Developed brand identity',
      'Designed promotional social media posts',
      'Created marketing visuals for product launches',
      'Maintained a consistent visual style across platforms',
    ],
  },
  {
    id: 'habesha-printing',
    clientName: 'Habesha Printing',
    role: 'Social Media Content Designer',
    tasks: [
      'Designed promotional graphics',
      'Created marketing materials for print and digital campaigns',
      'Improved the visual presentation of the business online',
    ],
  },
  {
    id: 'personal-brands-small-businesses',
    clientName: 'Personal Brands & Small Businesses',
    role: 'Content Creator & Social Media Manager',
    tasks: [
      'Planned content strategies',
      'Designed engaging posts and reels',
      'Edited promotional videos',
      'Wrote captions focused on audience engagement',
      'Helped businesses maintain a professional online presence',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' as const},
  },
};

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="relative scroll-mt-20 py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-12 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Client Collaborations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Brands & Creators I’ve Worked With
          </h2>
        </motion.div>

        {/* Client Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CLIENT_PROJECTS.map((client) => (
            <motion.div
              key={client.id}
              variants={cardVariants}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Info */}
                <div className="space-y-1 border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {client.clientName}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 tracking-wide uppercase">
                    Role: {client.role}
                  </p>
                </div>

                {/* Task List */}
                <ul className="space-y-2.5">
                  {client.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}