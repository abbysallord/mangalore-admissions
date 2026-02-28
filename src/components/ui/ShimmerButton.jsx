// src/components/ui/ShimmerButton.jsx

import { motion } from 'framer-motion';

export default function ShimmerButton({
  children,
  onClick,
  className = '',
  type = 'button',
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gold/30 bg-navy-mid px-8 py-3 font-sans text-sm font-semibold text-gold transition-colors hover:border-gold/50 ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Shimmer sweep */}
      <div
        className="pointer-events-none absolute inset-0 animate-shimmer"
        style={{
          background:
            'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.12) 55%, transparent 70%)',
          backgroundSize: '200% 100%',
        }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
