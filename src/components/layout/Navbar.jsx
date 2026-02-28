// src/components/layout/Navbar.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import useScrollPosition from '../../hooks/useScrollPosition';
import navigation from '../../constants/navigation';
import ShimmerButton from '../ui/ShimmerButton';

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 60;

  const handleLink = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLink(e, '#hero')}
          className="font-display text-2xl text-gold"
        >
          EduPath <span className="text-cream/60">Mangalore</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLink(e, link.href)}
              className="group relative font-sans text-sm font-medium text-cream/70 transition-colors hover:text-gold"
            >
              {link.label}
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ShimmerButton
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="!py-2 !px-5 !text-xs"
          >
            Book Now
          </ShimmerButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden cursor-pointer text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="glass border-t border-white/[0.06] md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-3 px-4 py-5">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  className="font-sans text-base font-medium text-cream/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <ShimmerButton
                onClick={() => {
                  setMobileOpen(false);
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-2 w-full"
              >
                Book Now
              </ShimmerButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
