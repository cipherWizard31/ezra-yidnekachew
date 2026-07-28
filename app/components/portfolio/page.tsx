'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { FaYoutube, FaInstagram, FaXTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa6';

interface SocialLink {
  platform: 'YouTube' | 'Instagram' | 'X' | 'TikTok' | 'LinkedIn' | 'Website';
  url: string;
}

interface ClientProject {
  id: string;
  clientName: string;
  clientHandle: string;
  avatar: string;
  banner: string;
  category: 'Full Management' | 'Content Creation' | 'Shorts & Reels' | 'Video Editing';
  roles: string[];
  description: string;
  whatTheyDid: string[];
  socialLinks: SocialLink[];
}

const CATEGORIES = ['All', 'Full Management', 'Content Creation', 'Shorts & Reels', 'Video Editing'];

const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 'tech-uncut',
    clientName: 'TechUncut',
    clientHandle: '@techuncut',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300',
    banner: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000',
    category: 'Full Management',
    roles: ['Social Media Manager', 'Video Editor', 'Content Strategist'],
    description: 'A fast-growing tech channel focusing on gadgets, software tutorials, and hardware reviews.',
    whatTheyDid: [
      'Developed and executed end-to-end content calendar strategy',
      'Edited long-form YouTube videos and repurposed short-form clips',
      'Managed community engagement and video copywriting across socials',
    ],
    socialLinks: [
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'Instagram', url: 'https://instagram.com' },
    ],
  },
  {
    id: 'veloce-apparel',
    clientName: 'Veloce Apparel',
    clientHandle: '@veloce.co',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
    banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000',
    category: 'Content Creation',
    roles: ['Content Creator', 'Video Producer'],
    description: 'A modern streetwear apparel brand with a strong focus on minimalist aesthetics and lifestyle trends.',
    whatTheyDid: [
      'Produced high-retention video ads for product collection launches',
      'Curated aesthetic grid layouts and story content',
      'Coordinated influencer collaboration assets and promotional releases',
    ],
    socialLinks: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'TikTok', url: 'https://tiktok.com' },
    ],
  },
  {
    id: 'apex-media',
    clientName: 'Apex Media & Pods',
    clientHandle: '@apexmediapod',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
    banner: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000',
    category: 'Shorts & Reels',
    roles: ['Short-Form Producer', 'Video Editor'],
    description: 'A weekly business and entrepreneurship podcast interviewing tech founders and industry leaders.',
    whatTheyDid: [
      'Extracted key highlight moments from long podcast recordings',
      'Added dynamic kinetic typography, color grading, and sound effects',
      'Automated scheduling across YouTube Shorts, Reels, and TikTok',
    ],
    socialLinks: [
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'TikTok', url: 'https://tiktok.com' },
      { platform: 'Instagram', url: 'https://instagram.com' },
    ],
  },
  {
    id: 'lumina-creative',
    clientName: 'Lumina Creative',
    clientHandle: '@luminacreative',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300',
    banner: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000',
    category: 'Video Editing',
    roles: ['Lead Video Editor', 'Colorist'],
    description: 'A creative agency delivering digital media campaigns and brand identity for startups.',
    whatTheyDid: [
      'Provided full post-production editing for commercial promotional reels',
      'Applied custom cinematic color grading and audio mixing',
      'Created reusable visual templates for brand consistency',
    ],
    socialLinks: [
      { platform: 'Website', url: 'https://example.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedClient, setSelectedClient] = useState<ClientProject | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? CLIENT_PROJECTS
    : CLIENT_PROJECTS.filter((item) => item.category === activeCategory);

  const renderSocialIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'YouTube': return <FaYoutube className="w-4 h-4" />;
      case 'Instagram': return <FaInstagram className="w-4 h-4" />;
      case 'X': return <FaXTwitter className="w-4 h-4" />;
      case 'TikTok': return <FaTiktok className="w-4 h-4" />;
      case 'LinkedIn': return <FaLinkedin className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

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
            Brands & Creators Managed
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A showcase of creators and businesses I worked with, along with roles and responsibilities.
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
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20 font-semibold'
                    : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Client Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((client) => (
              <motion.div
                key={client.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedClient(client)}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden backdrop-blur-md shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90 cursor-pointer flex flex-col justify-between"
              >
                {/* Banner & Avatar Header */}
                <div className="relative h-32 w-full overflow-hidden bg-slate-950">
                  <img
                    src={client.banner}
                    alt={client.clientName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Category Pill Top Right */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 text-sky-400 border border-slate-800 backdrop-blur-md">
                      {client.category}
                    </span>
                  </div>

                  {/* Avatar & Name */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-3">
                    <img
                      src={client.avatar}
                      alt={client.clientName}
                      className="w-12 h-12 rounded-full border-2 border-blue-500/80 object-cover shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {client.clientName}
                      </h3>
                      <p className="text-xs text-slate-400">{client.clientHandle}</p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {client.description}
                  </p>

                  {/* Role Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {client.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover CTA Indicator */}
                <div className="px-6 py-3 bg-slate-950/40 border-t border-white/5 flex items-center justify-between text-xs text-sky-400 font-semibold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span>View Details & Links</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Client Details Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClient(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl my-8 bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl space-y-6"
            >
              {/* Modal Banner Header */}
              <div className="relative h-40 sm:h-48 w-full bg-slate-950">
                <img
                  src={selectedClient.banner}
                  alt={selectedClient.clientName}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedClient(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-950/80 text-slate-400 hover:text-white border border-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Client Profile Info */}
                <div className="absolute bottom-4 left-6 flex items-center gap-4">
                  <img
                    src={selectedClient.avatar}
                    alt={selectedClient.clientName}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-blue-500 object-cover shadow-xl"
                  />
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {selectedClient.clientName}
                    </h3>
                    <p className="text-sm text-sky-400 font-medium">{selectedClient.clientHandle}</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 pt-0">
                
                {/* Description */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    About
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedClient.description}
                  </p>
                </div>

                {/* What They Did */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What I Did
                  </h4>
                  <ul className="space-y-2">
                    {selectedClient.whatTheyDid?.map((task, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Roles Executed Tags */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Roles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedClient.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-slate-300 font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-3 pt-2 border-t border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Client Social Links
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedClient.socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white hover:border-sky-400 transition-colors text-xs font-semibold"
                      >
                        {renderSocialIcon(social.platform)}
                        <span>{social.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}