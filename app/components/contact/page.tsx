'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  Loader2, 
  Mail, 
  Phone,
} from 'lucide-react';
import { BsInstagram, BsTelegram, BsLinkedin } from 'react-icons/bs';

const contactInfo = {
  email: 'ezraye9@gmail.com',
  phone: '+251 994834110',
  socials: [  
    { name: 'Instagram', href: 'https://www.instagram.com/e.s.d.r.a_j', icon: BsInstagram},
    { name: 'LinkedIn', href: 'https://x.com', icon: BsLinkedin },
    { name: 'Telegram', href: 'https://t.me/elyon_el', icon: BsTelegram },
  ],
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '6d818a05-8d11-4bbd-aae6-9fc1894545bc');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
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
            Ready to Grow Your Brand?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Looking for full social media management, content creation, or a custom growth strategy? Send a message and let's elevate your presence.
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
          {isSubmitted ? (
            /* Success State Screen */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <CheckCircle2 className="w-14 h-14 text-sky-400 mx-auto" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Message Delivered!</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Thanks for reaching out. I'll review your project details and get back to you via email shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    name="name"
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
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              {/* Service Required */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Service Needed
                </label>
                <select 
                  name="project_type"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-slate-300 focus:outline-none focus:border-sky-400 transition-colors"
                >
                  <option value="Full Social Media Management">Full Social Media Management</option>
                  <option value="Content Creation & Design">Content Creation & Design</option>
                  <option value="Short-Form Video & Reels">Short-Form Video & Reels</option>
                  <option value="Social Strategy & Consultation">Social Strategy & Consultation</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your brand, current social media platforms, goals, or upcoming campaigns..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <p className="text-xs text-rose-400 text-center font-medium">
                  {errorMessage}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info & Social Links Below Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left border-t border-white/10"
        >
          {/* Email Block */}
          <a 
            href={`mailto:${contactInfo.email}`}
            className="flex flex-col items-center md:items-start p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Direct Email</span>
            <span className="text-sm font-medium text-white mt-1">{contactInfo.email}</span>
          </a>

          {/* Phone Block */}
          <a 
            href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="flex flex-col items-center md:items-start p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Phone / WhatsApp</span>
            <span className="text-sm font-medium text-white mt-1">{contactInfo.phone}</span>
          </a>

          {/* Socials Block */}
          <div className="flex flex-col items-center md:items-start p-4 rounded-xl bg-slate-900/40 border border-white/5">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Connect With Me</span>
            <div className="flex items-center gap-3">
              {contactInfo.socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-12 h-12 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors"
                  >
                    <Icon className="w-7 h-7" />
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