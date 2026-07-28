'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { FaYoutube, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const socialLinks = [
  { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com' },
  { name: 'X (Twitter)', icon: FaXTwitter, href: 'https://x.com' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    // Replace with your actual Web3Forms Access Key
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
                Thanks for getting in touch. I'll review your project details and respond via email as soon as possible.
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

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Project Type
                </label>
                <select 
                  name="project_type"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-slate-300 focus:outline-none focus:border-sky-400 transition-colors"
                >
                  <option value="YouTube Long-Form Video">YouTube Long-Form Video</option>
                  <option value="Shorts / Reels / TikToks">Shorts / Reels / TikToks</option>
                  <option value="Commercial / Brand Ad">Commercial / Brand Ad</option>
                  <option value="Color Grading / Sound Design">Color Grading / Sound Design</option>
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
                  placeholder="Tell me about your video length, deadline, and style ideas..."
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

          {/* Social Links Bar */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Mail className="w-4 h-4 text-sky-400" />
              <span>or email directly at <strong className="text-white">ezraye9@gmail.com</strong></span>
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