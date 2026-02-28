// src/components/ui/AuroraBackground.jsx

import { motion } from 'framer-motion';

const blobs = [
  {
    color: 'radial-gradient(circle, rgba(212,168,83,0.25) 0%, transparent 70%)',
    size: 500,
    x: [0, 80, -50, 40, 0],
    y: [0, -60, 40, -30, 0],
    scale: [1, 1.15, 0.9, 1.1, 1],
    duration: 20,
    left: '10%',
    top: '20%',
  },
  {
    color: 'radial-gradient(circle, rgba(11,22,40,0.7) 0%, transparent 70%)',
    size: 600,
    x: [0, -100, 70, -40, 0],
    y: [0, 50, -80, 30, 0],
    scale: [1, 0.85, 1.2, 0.9, 1],
    duration: 25,
    left: '50%',
    top: '10%',
  },
  {
    color: 'radial-gradient(circle, rgba(20,32,64,0.5) 0%, transparent 70%)',
    size: 550,
    x: [0, 60, -80, 30, 0],
    y: [0, 40, -60, 70, 0],
    scale: [1, 1.1, 0.85, 1.1, 1],
    duration: 22,
    left: '65%',
    top: '45%',
  },
  {
    color: 'radial-gradient(circle, rgba(212,168,83,0.12) 0%, transparent 70%)',
    size: 400,
    x: [0, -40, 60, -20, 0],
    y: [0, -50, 20, -40, 0],
    scale: [1, 1.2, 0.9, 1.05, 1],
    duration: 18,
    left: '25%',
    top: '55%',
  },
];

export default function AuroraBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Deep navy base */}
      <div className="absolute inset-0 bg-navy" />

      {/* Animated blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            left: blob.left,
            top: blob.top,
            filter: 'blur(80px)',
            willChange: 'transform',
          }}
          animate={{
            x: blob.x,
            y: blob.y,
            scale: blob.scale,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(11,22,40,0.7) 100%)',
        }}
      />
    </div>
  );
}
