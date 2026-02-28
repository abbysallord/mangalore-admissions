// src/components/sections/Courses.jsx

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import courses from '../../data/courses';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import BorderBeam from '../ui/BorderBeam';
import ShimmerButton from '../ui/ShimmerButton';

const categories = ['All', 'Engineering', 'Medical', 'Management', 'Law', 'Science'];

export default function Courses() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () =>
      active === 'All'
        ? courses
        : courses.filter((c) => c.category === active),
    [active]
  );

  return (
    <section id="courses" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Programmes"
          subtitle="Expert-guided admission pathways designed for every stream and aspiration."
        />

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 font-sans text-sm font-semibold transition-colors cursor-pointer ${
                active === cat
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-white/10 text-cream/50 hover:border-gold/30 hover:text-cream'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Course grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <TiltCard>
                  <div className="relative flex h-full flex-col p-6">
                    {/* Border Beam */}
                    <BorderBeam duration={6} bgColor="bg-navy-mid" />

                    {/* Badge + category */}
                    <div className="relative z-10 mb-4 flex items-start justify-between">
                      {course.badge && (
                        <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-gold">
                          {course.badge}
                        </span>
                      )}
                      <span className="font-sans text-xs uppercase tracking-wider text-cream/40">
                        {course.category}
                      </span>
                    </div>

                    <h3 className="relative z-10 mb-3 font-display text-xl text-cream">
                      {course.title}
                    </h3>
                    <p className="relative z-10 mb-6 flex-1 font-sans text-sm leading-relaxed text-cream/50">
                      {course.description}
                    </p>

                    <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <div className="flex gap-4">
                        <span className="font-sans text-xs text-cream/40">
                          {course.duration}
                        </span>
                        <span className="rounded-full bg-gold/10 px-2 py-0.5 font-sans text-xs text-gold">
                          {course.level}
                        </span>
                      </div>
                      <ShimmerButton className="!px-4 !py-2 !text-xs">
                        Enroll Now
                      </ShimmerButton>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
