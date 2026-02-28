// src/components/ui/NumberTicker.jsx

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion';

export default function NumberTicker({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const rounded = useTransform(motionValue, (latest) => {
    const num = Math.round(latest);
    return num.toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, value, duration, motionValue]);

  return (
    <span ref={ref} className={`inline-flex items-baseline ${className}`}>
      {prefix && <span>{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
