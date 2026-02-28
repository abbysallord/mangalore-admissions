// src/components/ui/TextReveal.jsx

import { motion } from 'framer-motion';

export default function TextReveal({
  text,
  delay = 0,
  className = '',
  as: Tag = 'div',
  splitBy = 'char', // 'char' or 'word'
}) {
  const items =
    splitBy === 'word'
      ? text.split(' ')
      : text.split('');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === 'word' ? 0.06 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: 40,
      opacity: 0,
      filter: 'blur(8px)',
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: splitBy === 'char' ? 'pre' : undefined }}
        >
          {item}
          {splitBy === 'word' && i < items.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.div>
  );
}
