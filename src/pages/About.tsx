import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionBadge, AnimatedCounter } from '../components/ui';
import { fadeUp, staggerContainer, scaleUp, viewportConfig } from '../lib/motion';

function AboutHero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F] leading-tight"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          Built by a freelancer who got tired of chasing payments.
        </motion.h1>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionBadge>Our Story</SectionBadge>
          <motion.h2
            className="font-display font-bold text-3xl text-[#0F0F0F] mt-4"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            Why InvoiceFlow exists.
          </motion.h2>
          <motion.div
            className="mt-6 space-y-4 text-[#6B7280]"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
          >
            <motion.p variants={fadeUp}>
              InvoiceFlow started when its founder, a developer doing client work, spent 45 minutes making an invoice in Google Docs and another week chasing payment. There had to be a better way.
            </motion.p>
            <motion.p variants={fadeUp}>
              One afternoon and a weekend later, InvoiceFlow was born. The idea was simple: a tool that makes invoicing so fast and so clean that getting paid becomes the easy part of freelancing.
            </motion.p>
            <motion.p variants={fadeUp}>
              Today, InvoiceFlow serves thousands of freelancers and small businesses across Africa and beyond. We're still small, still independent, and still obsessed with making invoicing disappear into the background of your work.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={scaleUp}
        >
          <svg viewBox="0 0 400 350" fill="none" className="w-full" aria-hidden="true">
            {/* Desk */}
            <rect x="60" y="200" width="280" height="8" rx="4" fill="#E5E7EB" />
            {/* Laptop */}
            <rect x="120" y="120" width="160" height="80" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
            <rect x="130" y="130" width="140" height="60" rx="4" fill="#F9FAFB" />
            <rect x="140" y="140" width="60" height="6" rx="3" fill="#4F46E5" opacity="0.5" />
            <rect x="140" y="152" width="100" height="4" rx="2" fill="#E5E7EB" />
            <rect x="140" y="162" width="80" height="4" rx="2" fill="#E5E7EB" />
            <rect x="140" y="172" width="90" height="4" rx="2" fill="#E5E7EB" />
            <rect x="100" y="200" width="200" height="6" rx="3" fill="#D1D5DB" />
            {/* Person silhouette */}
            <circle cx="200" cy="80" r="25" fill="#EEF2FF" />
            <rect x="175" y="105" width="50" height="30" rx="8" fill="#EEF2FF" />
            {/* Lightbulb */}
            <circle cx="320" cy="70" r="20" fill="#FEF3C7" />
            <path d="M315 65c0-5 5-10 10-5s0 10-5 10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <rect x="317" y="85" width="6" height="8" rx="2" fill="#F59E0B" opacity="0.5" />
            {/* Coffee cup */}
            <rect x="80" y="180" width="20" height="20" rx="3" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
            <path d="M100 185c5 0 5 10 0 10" stroke="#E5E7EB" strokeWidth="1" />
            {/* Plant */}
            <rect x="330" y="180" width="16" height="20" rx="3" fill="#D1FAE5" />
            <circle cx="338" cy="170" r="12" fill="#10B981" opacity="0.3" />
            <circle cx="332" cy="165" r="8" fill="#10B981" opacity="0.4" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 2400, suffix: '+', label: 'Users' },
    { value: 480, suffix: 'M+', prefix: '₦', label: 'Invoiced' },
    { value: 12000, suffix: '+', label: 'Invoices sent' },
    { value: 98, suffix: '%', label: 'Payment rate' },
  ];

  return (
    <section className="py-16 px-6 bg-[#EEF2FF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[#4F46E5]">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
              </div>
              <p className="mt-2 text-sm text-[#6B7280]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { title: 'Speed over complexity', body: 'Tools should get out of your way. InvoiceFlow is designed to be fast — from signup to first invoice in under 60 seconds.' },
    { title: 'Honest pricing', body: 'No hidden fees. No dark patterns. What you see is what you pay. Free is free, and paid plans are straightforward.' },
    { title: 'Built for Africa, used globally', body: 'Designed with Naira, Paystack, and local context in mind. But built to standards that work anywhere in the world.' },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge>Our Values</SectionBadge>
          <motion.h2
            className="font-display font-bold text-3xl text-[#0F0F0F] mt-4"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            What we believe in.
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeUp} className="p-8 rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-[#0F0F0F] mb-2">{v.title}</h3>
              <p className="text-sm text-[#6B7280]">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Stats />
      <Values />
      {/* CTA */}
      <section className="py-24 px-6 bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <svg width="600" height="400" viewBox="0 0 600 400" fill="none">
            <ellipse cx="300" cy="200" rx="250" ry="150" fill="#4F46E5" opacity="0.08" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="font-display font-extrabold text-3xl sm:text-4xl text-white"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            Join us in making freelancing better.
          </motion.h2>
          <motion.p className="mt-4 text-gray-400" initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}>
            Start invoicing in under 60 seconds.
          </motion.p>
          <motion.div className="mt-8" initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#4F46E5] text-white font-semibold">
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
