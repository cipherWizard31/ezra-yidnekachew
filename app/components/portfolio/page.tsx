'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, Layers } from 'lucide-react';
import { PROJECTS } from '@/lib/portfolioData';

interface Project {
  id: string;
  title: string;
  category: 'YouTube' | 'Shorts & Reels' | 'Commercial' | 'Color Grading';
  thumbnail: string;
  videoEmbedUrl: string; // YouTube/Vimeo embed link
  client: string;
  tags: string[];
}

const CATEGORIES = ['All', 'YouTube', 'Shorts & Reels', 'Commercial', 'Color Grading'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((item) => item.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      className="relative scroll-mt-20 py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden text-white"
    >
      {/* Background Ambient Glow (Matching Services section style) */}
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
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Selected Video Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A showcase of recent edits crafted for maximum engagement, high retention, and cinematic polish.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedVideo(project.videoEmbedUrl)}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden backdrop-blur-md shadow-lg transition-colors hover:border-blue-500/50 hover:bg-slate-900/80 cursor-pointer flex flex-col justify-between"
              >
                {/* Thumbnail & Play Overlay */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white border border-blue-400/30 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Category Badge Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 text-sky-400 border border-slate-800">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Client: {project.client}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {project.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-950/80 text-slate-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Embed Frame */}
              <iframe
                src={`${selectedVideo}?autoplay=1`}
                title="Project Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}