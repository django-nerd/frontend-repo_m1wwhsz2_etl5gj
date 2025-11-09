import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Tailwind',
  'Framer Motion',
  'Accessibility',
  'Performance',
];

const About = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative w-full bg-neutral-950 px-6 py-24 text-white md:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-[280px,1fr]">
          {/* Avatar */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto aspect-square w-48 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400/20 to-purple-500/20 p-1 md:w-64"
            aria-hidden="true"
          >
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-neutral-900">
              <span className="text-5xl font-semibold text-white/90">YN</span>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <h2 id="about-title" className="text-balance bg-gradient-to-br from-white to-white/80 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              About me
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              I’m a frontend engineer focused on building polished, accessible experiences with a strong eye for motion and performance. I blend crisp interfaces with subtle, purposeful animations that run smoothly on any device.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Skills">
              {skills.map((s) => (
                <motion.li
                  key={s}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                    {s}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
