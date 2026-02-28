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
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-0 pb-12 pt-20 sm:pb-0 sm:pt-0"
    >
      {/* Aurora BG */}
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center xs:px-5 sm:px-6 lg:px-8">
        <motion.p
          className="mb-3 font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold xs:text-xs xs:tracking-[0.2em] sm:mb-6 sm:text-sm sm:tracking-[0.3em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Premier College Admissions Consulting
        </motion.p>

        <h1 className="font-display text-[1.5rem] leading-[1.25] text-cream xs:text-[1.75rem] sm:text-4xl md:text-5xl lg:text-7xl">
          <TextReveal text="Mangalore's Premier" delay={0.3} splitBy="word" />
          <br />
          <span className="text-gold">
            <TextReveal text="Admissions Consultants" delay={0.6} splitBy="word" />
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-3 max-w-2xl px-1 font-sans text-[0.8rem] leading-relaxed text-cream/70 xs:mt-4 xs:px-2 xs:text-sm sm:mt-5 sm:px-0 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          From Manipal to NITK — we guide students into the right college,
          every time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-5 flex flex-col items-center justify-center gap-3 xs:mt-6 sm:mt-10 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <ShimmerButton onClick={() => scrollTo('#contact')} className="w-full xs:w-auto">
            Book Free Consultation
          </ShimmerButton>
          <motion.button
            onClick={() => scrollTo('#courses')}
            className="w-full rounded-full border border-cream/20 px-6 py-3 font-sans text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold xs:w-auto sm:px-8"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Courses
          </motion.button>
        </motion.div>

        {/* College marquee pills */}
        <motion.div
          className="mt-6 xs:mt-8 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <InfiniteMarquee speed={40} pauseOnHover>
            {collegePartners.map((name) => (
              <span
                key={name}
                className="inline-block whitespace-nowrap rounded-full border border-gold/20 bg-gold/10 px-3 py-1 font-sans text-[0.65rem] font-medium text-gold xs:px-4 xs:py-1.5 xs:text-xs"
              >
                {name}
              </span>
            ))}
          </InfiniteMarquee>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 xs:bottom-4 sm:bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-6 w-6 text-cream/40 xs:h-8 xs:w-8" />
      </motion.div>
    </section>
  );
}
