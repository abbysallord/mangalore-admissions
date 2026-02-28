// src/components/ui/TiltCard.jsx

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  // Glossy sheen position
  const sheenX = useTransform(x, [0, 1], [0, 100]);
  const sheenY = useTransform(y, [0, 1], [0, 100]);

  // Build the sheen gradient as a MotionValue (must be at component level)
  const sheenGradient = useTransform(
    [sheenX, sheenY],
    ([sx, sy]) =>
      `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.06) 0%, transparent 60%)`
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full rounded-2xl border border-white/[0.06] bg-navy-mid overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glossy sheen overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: sheenGradient }}
        />

        {/* Content */}
        <div className="relative z-20 h-full">{children}</div>
      </motion.div>
    </motion.div>
  );
}
