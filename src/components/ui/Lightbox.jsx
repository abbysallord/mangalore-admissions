// src/components/ui/Lightbox.jsx

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/90 backdrop-blur-md" />

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-cream/60 hover:text-gold transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />

            {/* Caption */}
            {image.caption && (
              <p className="mt-4 text-center text-cream/80 font-sans text-lg">
                {image.caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
