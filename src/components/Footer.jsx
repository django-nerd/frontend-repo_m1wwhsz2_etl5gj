import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-980 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <nav aria-label="Social links" className="flex items-center gap-3">
          <a
            href="https://github.com/"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="GitHub"
          >
            <Github className="size-4" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" aria-hidden="true" />
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Email"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
