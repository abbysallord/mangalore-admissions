// src/components/sections/Contact.jsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FloatingLabelInput from '../ui/FloatingLabelInput';
import ShimmerButton from '../ui/ShimmerButton';
import BorderBeam from '../ui/BorderBeam';

const streamOptions = [
  'Engineering',
  'Medical — MBBS',
  'Medical — BDS',
  'Management — MBA',
  'Law — LLB',
  'Nursing',
  'Pharmacy',
  'Science',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  stream: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-navy-mid py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Start Your Journey Today" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-navy p-8">
              <BorderBeam duration={5} bgColor="bg-navy" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-cream">
                      Office Address
                    </p>
                    <p className="font-sans text-sm text-cream/50">
                      2nd Floor, KS Rao Road, Hampankatta,
                      <br />
                      Mangalore, Karnataka 575001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-cream">
                      Phone
                    </p>
                    <p className="font-sans text-sm text-cream/50">
                      +91 824 245 6789
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-cream">
                      Email
                    </p>
                    <p className="font-sans text-sm text-cream/50">
                      hello@edupathmangalore.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-sans text-sm leading-relaxed text-cream/40">
              Visit us at our Hampankatta office for a free 30-minute
              consultation, or fill in the form and we&apos;ll reach out within
              24 hours.
            </p>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-navy p-12 text-center">
                {/* Animated check SVG */}
                <motion.svg
                  viewBox="0 0 64 64"
                  className="mb-6 h-20 w-20"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#D4A853"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.path
                    d="M20 33 L28 41 L44 25"
                    fill="none"
                    stroke="#D4A853"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  />
                </motion.svg>
                <h3 className="mb-2 font-display text-2xl text-cream">
                  Thank You, {form.name || 'Student'}!
                </h3>
                <p className="font-sans text-sm text-cream/50">
                  We&apos;ll be in touch within 24 hours to schedule your free
                  consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative space-y-5 rounded-2xl border border-white/[0.06] bg-navy p-8"
              >
                <BorderBeam duration={6} bgColor="bg-navy" />
                <div className="relative z-10 space-y-5">
                  <FloatingLabelInput
                    label="Full Name"
                    name="name"
                    required
                    value={form.name}
                    onChange={update}
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FloatingLabelInput
                      label="Email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={update}
                    />
                    <FloatingLabelInput
                      label="Phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                    />
                  </div>

                  {/* Stream select */}
                  <div className="relative">
                    <select
                      name="stream"
                      value={form.stream}
                      onChange={update}
                      className="w-full appearance-none rounded-lg border border-white/10 bg-[#1a2035] px-4 py-4 pr-10 font-sans text-sm text-cream outline-none transition-colors focus:border-gold"
                    >
                      <option value="">Interested Stream</option>
                      {streamOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    {/* Dropdown arrow */}
                    <svg
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  <FloatingLabelInput
                    label="Message"
                    name="message"
                    textarea
                    value={form.message}
                    onChange={update}
                  />

                  <ShimmerButton type="submit" className="w-full">
                    Send Inquiry
                  </ShimmerButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
