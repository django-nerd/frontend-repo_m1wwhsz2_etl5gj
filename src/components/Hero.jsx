import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: reduceMotion ? 0 : 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline scene as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast; pointer events disabled to keep Spline interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.span
          variants={itemVariants}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs/relaxed text-white/80 backdrop-blur"
          aria-label="Tagline"
        >
          <span className="size-2 rounded-full bg-emerald-400" />
          Building delightful, fast experiences
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-heading bg-gradient-to-br from-white to-white/80 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
        >
          Hi, I’m Your Name — Product-focused Frontend Engineer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl text-balance text-white/80 md:text-lg"
        >
          I craft accessible, animated interfaces that feel effortless on any device. Clean code, crisp motion, and uncompromising performance.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-black shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            View Projects
            <ArrowDownRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;
