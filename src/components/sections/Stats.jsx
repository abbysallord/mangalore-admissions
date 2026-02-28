// src/components/sections/Stats.jsx

import { motion } from 'framer-motion';
import { GraduationCap, TrendingUp, Building2, Award } from 'lucide-react';
import NumberTicker from '../ui/NumberTicker';
import stats from '../../data/stats';

const iconMap = {
  GraduationCap,
  TrendingUp,
  Building2,
  Award,
};

export default function Stats() {
  return (
    <section className="relative bg-navy-mid py-16 sm:py-20">
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {Icon && (
                  <Icon className="mx-auto mb-3 h-8 w-8 text-gold" />
                )}
                <div className="font-display text-3xl text-cream sm:text-4xl md:text-5xl">
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <p className="mt-2 font-sans text-sm text-cream/50">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
