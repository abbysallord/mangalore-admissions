// src/components/layout/Footer.jsx

import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import navigation from '../../constants/navigation';

const courses = [
  'Engineering',
  'Medical',
  'Management',
  'Law',
  'Science',
  'Nursing',
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl text-gold">
              EduPath <span className="text-cream/60">Mangalore</span>
            </span>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/50">
              Guiding Mangalore&apos;s students into the region&apos;s
              best colleges through personalized strategy, transparent
              processes, and unwavering commitment.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cream/50 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="font-sans text-sm text-cream/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-wider text-gold">
              Courses
            </h4>
            <ul className="space-y-3">
              {courses.map((c) => (
                <li key={c}>
                  <a
                    href="#courses"
                    onClick={(e) => scrollTo(e, '#courses')}
                    className="font-sans text-sm text-cream/50 hover:text-gold transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-wider text-gold">
              Contact
            </h4>
            <address className="not-italic space-y-3 font-sans text-sm text-cream/50">
              <p>
                2nd Floor, KS Rao Road,
                <br />
                Hampankatta, Mangalore 575001
              </p>
              <p>+91 824 245 6789</p>
              <p>hello@edupathmangalore.com</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-sans text-xs text-cream/30">
            &copy; {year} EduPath Mangalore. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/20">
            Built for Mangalore&apos;s future leaders
          </p>
        </div>
      </div>
    </footer>
  );
}
