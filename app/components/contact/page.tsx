'use client';

import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaYoutube, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const socialLinks = [
  { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com' },
  { name: 'X (Twitter)', icon: FaXTwitter, href: 'https://x.com' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect your form handler here (e.g. Resend or Formspree)
  };

  return (
    <section 
      id="contact" 
      className="relative scroll-mt-20 py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto space-y-12 z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Upgrade Your Videos?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Have an upcoming project, channel, or commercial edit in mind? Send a message and let's bring it to life.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-md shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Project Type
              </label>
              <select 
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-slate-300 focus:outline-none focus:border-sky-400 transition-colors"
              >
                <option value="youtube">YouTube Long-Form Video</option>
                <option value="shorts">Shorts / Reels / TikToks</option>
                <option value="commercial">Commercial / Brand Ad</option>
                <option value="color">Color Grading / Sound Design</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Project Details
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your video length, deadline, and style ideas..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          {/* Social Links Bar */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Mail className="w-4 h-4 text-sky-400" />
              <span>or email directly at <strong className="text-white">yourname@gmail.com</strong></span>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}