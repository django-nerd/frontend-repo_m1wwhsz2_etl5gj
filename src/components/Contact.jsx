import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus('loading');
      // Simulate async submit. Replace with real endpoint or Netlify form.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 1800);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-neutral-950 px-6 py-24 text-white md:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-2xl">
        <h2 id="contact-title" className="text-3xl font-bold md:text-4xl">Let’s work together</h2>
        <p className="mt-2 text-white/70">Have a project in mind or just want to say hi? Drop a line below.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4" aria-label="Contact form">
          <label className="grid gap-2">
            <span className="text-sm text-white/70">Name</span>
            <input
              name="name"
              required
              autoComplete="name"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-emerald-400/40"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-white/70">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-emerald-400/40"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-white/70">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-emerald-400/40"
              placeholder="Tell me about your project"
            />
          </label>

          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send className="size-4" aria-hidden="true" />
            {status === 'loading' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send message'}
          </motion.button>
          <p className="sr-only" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
