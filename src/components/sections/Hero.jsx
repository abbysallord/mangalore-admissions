// src/components/sections/Hero.jsx

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AuroraBackground from '../ui/AuroraBackground';
import TextReveal from '../ui/TextReveal';
import ShimmerButton from '../ui/ShimmerButton';
import InfiniteMarquee from '../ui/InfiniteMarquee';
import collegePartners from '../../data/collegePartners';

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Aurora BG */}
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          className="mb-6 font-sans text-sm uppercase tracking-[0.3em] text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Premier College Admissions Consulting
        </motion.p>

        <h1 className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl lg:text-7xl">
          <TextReveal text="Mangalore's Premier" delay={0.3} splitBy="word" />
          <br />
          <span className="text-gold">
            <TextReveal text="Admissions Consultants" delay={0.6} splitBy="word" />
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-cream/70 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          From Manipal to NITK — we guide students into the right college,
          every time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <ShimmerButton onClick={() => scrollTo('#contact')}>
            Book Free Consultation
          </ShimmerButton>
          <motion.button
            onClick={() => scrollTo('#courses')}
            className="rounded-full border border-cream/20 px-8 py-3 font-sans text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Courses
          </motion.button>
        </motion.div>

        {/* College marquee pills */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <InfiniteMarquee speed={40} pauseOnHover>
            {collegePartners.map((name) => (
              <span
                key={name}
                className="inline-block whitespace-nowrap rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 font-sans text-xs font-medium text-gold"
              >
                {name}
              </span>
            ))}
          </InfiniteMarquee>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-8 w-8 text-cream/40" />
      </motion.div>
    </section>
  );
}
