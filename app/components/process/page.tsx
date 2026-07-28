'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Pen, 
  ViewIcon, 
  Sliders, 
  UploadCloud,
  Send, 
  Presentation
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Discovery & Strategy',
    description:
      'We discuss your business, target audience, goals, and competitors to understand what success looks like.',
  },
  {
    number: '02',
    icon: ViewIcon,
    title: 'Social Media Audit',
    description:
      'I review your current social media presence, identify opportunities for improvement, and develop a content strategy tailored to your brand.',
  },
  {
    number: '03',
    icon: Pen,
    title: 'Content Planning',
    description:
      'I create a content calendar with post ideas, captions, posting schedule, and creative direction aligned with your business goals.',
  },
  {
    number: '04',
    icon: Sliders,
    title: 'Content Creation',
    description:
      'I design graphics, edit videos, write captions, and prepare content optimized for each platform.',
  },
  {
    number: '05',
    icon: Send,
    title: 'Review & Approval',
    description:
      'You review the content, provide feedback, and approve everything before it goes live.',
  },
  {
    number: '06',
    icon: UploadCloud,
    title: 'Publishing & Management',
    description:
      'I schedule or publish the content, monitor engagement, and ensure your social media stays active and consistent.',
  },
  {
    number: '07',
    icon: Presentation,
    title: 'Performance & Report',
    description:
      'At the end of the campaign or month, I provide insights, analytics, and recommendations to improve future performance.',
  },
];

export default function Process() {
  return (
    <section 
      id="process" 
      className="relative scroll-mt-20 py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-16 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Seamless Editing Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            From raw footage to polished final export—here is how we collaborate step-by-step.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Aesthetic Center Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-linear-to-b from-blue-500/20 via-sky-500/50 to-blue-500/20" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator Icon */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/20"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>

                  {/* Card Container with explicit directional padding */}
                  <div 
                    className={`w-full md:w-1/2 pl-16 ${
                      isEven 
                        ? 'md:pl-12 md:pr-0'   // Right side on desktop: space on left from center line
                        : 'md:pr-12 md:pl-0'   // Left side on desktop: space on right from center line
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      whileHover={{ y: -4 }}
                      className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-lg transition-colors hover:border-blue-500/50 hover:bg-slate-900/80"
                    >
                      <div className="space-y-3">
                        {/* Step Header */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-widest font-semibold text-sky-400">
                            Step {step.number}
                          </span>
                          <span className="text-2xl font-black text-slate-800 group-hover:text-sky-500/30 transition-colors">
                            {step.number}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer Div for desktop alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}