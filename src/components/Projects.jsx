import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Motion Gallery',
    desc: 'A gallery of micro-interactions built with Framer Motion and Tailwind.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    code: '#',
    demo: '#',
  },
  {
    title: 'Perf-first Starter',
    desc: 'A Next.js starter optimized for Lighthouse 95+ and fast DX.',
    tags: ['Next.js', 'TypeScript', 'SEO'],
    code: '#',
    demo: '#',
  },
  {
    title: 'A11y Components',
    desc: 'Accessible, headless components with great keyboard support.',
    tags: ['Accessibility', 'Radix UI', 'Testing'],
    code: '#',
    demo: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="relative w-full bg-neutral-980 px-6 py-24 text-white md:py-28" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 id="projects-title" className="text-3xl font-bold md:text-4xl">Selected projects</h2>
            <p className="mt-2 text-white/70">A few highlights with smooth, on-scroll reveals.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              initial={reduce ? false : 'hidden'}
              whileInView={reduce ? {} : 'visible'}
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 backdrop-blur transition will-change-transform hover:scale-[1.01]"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.code} className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <Github className="size-4" aria-hidden="true" /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-medium text-black hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                  <ExternalLink className="size-4" aria-hidden="true" /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
