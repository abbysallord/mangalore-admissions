// src/components/sections/CollegePartners.jsx

import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import InfiniteMarquee from '../ui/InfiniteMarquee';
import collegePartners from '../../data/collegePartners';

export default function CollegePartners() {
  return (
    <section className="relative bg-navy py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader title="Colleges We Place Students In" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <InfiniteMarquee speed={35} pauseOnHover>
            {collegePartners.map((name) => (
              <span
                key={name}
                className="inline-block whitespace-nowrap rounded-lg border border-white/[0.08] bg-navy-mid px-4 py-2.5 font-sans text-xs sm:text-sm sm:px-6 sm:py-3 font-medium text-cream/80 transition-colors hover:border-gold/30 hover:text-gold"
              >
                {name}
              </span>
            ))}
          </InfiniteMarquee>
        </motion.div>
      </div>
    </section>
  );
}
