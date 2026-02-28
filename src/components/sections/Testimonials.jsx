// src/components/sections/Testimonials.jsx

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import testimonials from '../../data/testimonials';
import SectionHeader from '../ui/SectionHeader';
import InfiniteMarquee from '../ui/InfiniteMarquee';

function TestimonialCard({ t }) {
  return (
    <div className="w-[280px] flex-shrink-0 rounded-2xl border border-white/[0.06] bg-navy-mid p-5 sm:w-[320px] md:w-[350px]">
      {/* Stars */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < t.rating ? 'fill-gold text-gold' : 'text-cream/20'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="mb-5 font-sans text-sm leading-relaxed text-cream/70">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={`https://picsum.photos/seed/${t.avatarSeed}/80/80`}
          alt={t.name}
          className="h-10 w-10 rounded-full object-cover border border-gold/30"
          loading="lazy"
        />
        <div>
          <p className="font-display text-sm text-cream">{t.name}</p>
          <p className="font-sans text-xs text-cream/40">{t.university}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const firstHalf = testimonials.slice(0, 4);
  const secondHalf = testimonials.slice(4);

  return (
    <section id="testimonials" className="bg-cream py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Student Success Stories" light />
      </div>

      <motion.div
        className="space-y-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Row 1 — scrolls left */}
        <InfiniteMarquee speed={45} direction="left" pauseOnHover>
          {firstHalf.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </InfiniteMarquee>

        {/* Row 2 — scrolls right */}
        <InfiniteMarquee speed={40} direction="right" pauseOnHover>
          {secondHalf.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </InfiniteMarquee>
      </motion.div>
    </section>
  );
}
