// src/components/ui/FloatingLabelInput.jsx

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingLabelInput({
  label,
  type = 'text',
  name,
  required = false,
  textarea = false,
  value,
  onChange,
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || (value && value.length > 0);

  const Tag = textarea ? 'textarea' : 'input';

  return (
    <div className="relative w-full">
      <Tag
        type={textarea ? undefined : type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={textarea ? 4 : undefined}
        className={`peer w-full rounded-lg border border-white/10 bg-[#1a2035] px-4 pt-6 pb-2 font-sans text-sm text-cream outline-none transition-colors placeholder-transparent focus:border-gold ${
          textarea ? 'resize-none' : ''
        }`}
        placeholder={label}
      />

      {/* Floating label */}
      <motion.label
        className="pointer-events-none absolute left-4 top-0 origin-left font-sans text-sm"
        animate={{
          y: isActive ? 6 : 16,
          scale: isActive ? 0.75 : 1,
          color: isActive ? '#D4A853' : '#6B7280',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {label}
      </motion.label>

      {/* Bottom focus line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
