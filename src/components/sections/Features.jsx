// src/components/sections/Features.jsx

import { motion } from 'framer-motion';
import {
  Map,
  Users,
  ShieldCheck,
  Stethoscope,
  Cpu,
  HeartPulse,
} from 'lucide-react';
import features from '../../data/features';
import BentoCard from '../ui/BentoCard';
import SectionHeader from '../ui/SectionHeader';

const iconMap = { Map, Users, ShieldCheck, Stethoscope, Cpu, HeartPulse };

// Grid size mapping — sm gets 2 cols, md gets 3 cols with bento effect
const sizeClasses = {
  large: 'sm:col-span-2 md:col-span-2 md:row-span-2',
  medium: 'sm:col-span-1 md:col-span-1 md:row-span-2',
  small: 'sm:col-span-1 md:col-span-1 md:row-span-1',
};

export default function Features() {
  return (
    <section id="features" className="bg-navy py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          subtitle="A decade of local expertise, personalised guidance, and an unmatched network across Mangalore's top institutions."
        />

        {/* auto-rows-auto on mobile, fixed rows on md+ for the bento effect */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[180px]">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                className={sizeClasses[feature.size] || ''}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <BentoCard className="h-full flex flex-col justify-between">
                  <div>
                    {Icon && (
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                    )}
                    <h3 className="mb-2 font-display text-lg text-cream sm:text-xl md:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-cream/50">
                      {feature.description}
                    </p>
                  </div>
                </BentoCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
