// src/components/ui/SectionHeader.jsx

import TextReveal from './TextReveal';
import { motion } from 'framer-motion';

export default function SectionHeader({
  title,
  subtitle,
  light = false,
  className = '',
}) {
  return (
    <div className={`mb-12 text-center sm:mb-16 ${className}`}>
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight ${
          light ? 'text-navy' : 'text-cream'
        }`}
      >
        <TextReveal text={title} splitBy="word" />
      </h2>

      {/* Animated gold underline */}
      <motion.div
        className="mx-auto mt-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {subtitle && (
        <motion.p
          className={`mx-auto mt-5 max-w-2xl font-sans text-sm leading-relaxed sm:text-base md:text-lg ${
            light ? 'text-muted' : 'text-cream/60'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
