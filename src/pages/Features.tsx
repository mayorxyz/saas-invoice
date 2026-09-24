import { motion } from 'framer-motion';
import { SectionBadge } from '../components/ui';
import { fadeUp, staggerContainer, scaleUp, viewportConfig } from '../lib/motion';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Fast Invoice Creation', body: 'Go from blank to sent in under 2 minutes. No unnecessary fields, no confusion.', icon: 'lightning' },
  { title: 'PDF Download', body: 'Every invoice generates a clean, branded PDF your clients can open anywhere.', icon: 'document' },
  { title: 'Email Directly', body: 'Send invoices to clients straight from InvoiceFlow. No copy-paste needed.', icon: 'envelope' },
  { title: 'Payment Tracking', body: 'Mark invoices as paid manually or let payment integrations do it automatically.', icon: 'check' },
  { title: 'Client Directory', body: 'Store client details once. Autofill every invoice you create for them.', icon: 'people' },
  { title: 'Overdue Alerts', body: 'Automatic reminders go out before and after due dates. You don\'t have to chase.', icon: 'bell' },
  { title: 'Multi-currency', body: 'Invoice in USD, NGN, EUR, GBP and more. Exchange rates handled for you.', icon: 'currency' },
  { title: 'Expense Tracking', body: 'Log business expenses alongside invoices. Know your real profit margins.', icon: 'expense' },
  { title: 'CSV Export', body: 'Export all your data anytime. Invoices, clients, payments — all in CSV format.', icon: 'export' },
  { title: 'Recurring Invoices', body: 'Set up invoices that auto-send on a schedule. Perfect for retainers.', icon: 'recurring' },
  { title: 'Client Portal', body: 'Give clients a login to view and pay invoices. Available on Pro plan.', icon: 'portal' },
  { title: 'Stripe + Paystack', body: 'Accept payments directly through your invoices. Business plan feature.', icon: 'payment' },
];

const iconPaths: Record<string, React.ReactNode> = {
  lightning: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  document: <><rect x="5" y="3" width="14" height="18" rx="2" stroke="#4F46E5" strokeWidth="2" /><path d="M9 13v4M7 15h4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
  envelope: <><rect x="3" y="6" width="18" height="12" rx="2" stroke="#4F46E5" strokeWidth="2" /><path d="M3 8l9 6 9-6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
  check: <><circle cx="12" cy="12" r="9" stroke="#4F46E5" strokeWidth="2" /><path d="M8 12l3 3 5-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
  people: <><circle cx="9" cy="8" r="3" stroke="#4F46E5" strokeWidth="2" /><circle cx="17" cy="9" r="2.5" stroke="#4F46E5" strokeWidth="2" /><path d="M3 19c0-3 3-5 6-5s6 2 6 5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
  bell: <><path d="M12 3a6 6 0 016 6c0 4 2 6 2 6H4s2-2 2-6a6 6 0 016-6z" stroke="#4F46E5" strokeWidth="2" /><path d="M10 19a2 2 0 004 0" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
  currency: <><circle cx="12" cy="12" r="9" stroke="#4F46E5" strokeWidth="2" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#4F46E5" fontWeight="bold">$</text></>,
  expense: <><rect x="4" y="4" width="16" height="16" rx="2" stroke="#4F46E5" strokeWidth="2" /><path d="M8 10h8M8 14h5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
  export: <><path d="M12 3v12M8 11l4 4 4-4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
  recurring: <><path d="M4 12a8 8 0 0114-5.3" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /><path d="M20 12a8 8 0 01-14 5.3" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /><path d="M18 3v4h-4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 21v-4h4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
  portal: <><rect x="4" y="4" width="16" height="16" rx="2" stroke="#4F46E5" strokeWidth="2" /><circle cx="12" cy="10" r="2" stroke="#4F46E5" strokeWidth="2" /><path d="M8 16c0-2 2-3 4-3s4 1 4 3" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
  payment: <><rect x="2" y="6" width="20" height="12" rx="2" stroke="#4F46E5" strokeWidth="2" /><path d="M2 10h20" stroke="#4F46E5" strokeWidth="2" /><rect x="5" y="14" width="4" height="2" rx="1" fill="#4F46E5" /></>,
};

function FeaturesHero() {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F0F0F" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <SectionBadge>Features</SectionBadge>
        <motion.h1
          className="font-display font-extrabold text-4xl sm:text-5xl text-[#0F0F0F] mt-6"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          Every feature you need. Nothing extra.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          InvoiceFlow is built for one thing: getting you paid. Here's what's inside.
        </motion.p>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-[#E5E7EB] bg-white shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {iconPaths[f.icon]}
                </svg>
              </div>
              <h3 className="font-semibold text-[#0F0F0F] mb-2">{f.title}</h3>
              <p className="text-sm text-[#6B7280]">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureDeepDive() {
  const dives = [
    {
      badge: 'Invoice Creation',
      title: 'From blank to sent in minutes.',
      points: ['Smart defaults that learn your business', 'Auto-save so you never lose work', 'Duplicate invoices with one click'],
      illustration: (
        <svg viewBox="0 0 400 300" fill="none" className="w-full" aria-hidden="true">
          <rect x="40" y="20" width="320" height="260" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
          <rect x="60" y="40" width="80" height="10" rx="5" fill="#4F46E5" opacity="0.3" />
          <rect x="60" y="65" width="120" height="8" rx="4" fill="#6B7280" opacity="0.3" />
          <rect x="60" y="90" width="280" height="30" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
          <rect x="70" y="100" width="100" height="8" rx="4" fill="#0F0F0F" opacity="0.3" />
          <rect x="60" y="135" width="280" height="30" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
          <rect x="70" y="145" width="80" height="8" rx="4" fill="#0F0F0F" opacity="0.3" />
          <rect x="60" y="180" width="280" height="30" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
          <rect x="70" y="190" width="120" height="8" rx="4" fill="#0F0F0F" opacity="0.3" />
          <rect x="260" y="230" width="80" height="30" rx="8" fill="#4F46E5" />
          <rect x="275" y="241" width="50" height="8" rx="4" fill="white" opacity="0.8" />
        </svg>
      ),
    },
    {
      badge: 'Client Management',
      title: 'All your clients in one place.',
      points: ['Searchable client directory', 'Invoice history per client', 'Outstanding balance at a glance'],
      illustration: (
        <svg viewBox="0 0 400 300" fill="none" className="w-full" aria-hidden="true">
          <rect x="20" y="20" width="160" height="260" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
          <rect x="35" y="35" width="80" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
          {[0, 1, 2, 3].map(i => (
            <g key={i}>
              <rect x="35" y={60 + i * 45} width="130" height="35" rx="6" fill={i === 0 ? '#EEF2FF' : '#F9FAFB'} stroke={i === 0 ? '#4F46E5' : '#E5E7EB'} strokeWidth="1" />
              <circle cx="55" cy={77 + i * 45} r="10" fill={i === 0 ? '#4F46E5' : '#E5E7EB'} />
              <rect x="72" y={73 + i * 45} width="60" height="6" rx="3" fill="#0F0F0F" opacity="0.4" />
            </g>
          ))}
          <rect x="210" y="20" width="170" height="260" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
          <circle cx="295" cy="60" r="25" fill="#EEF2FF" />
          <text x="295" y="66" textAnchor="middle" fontSize="14" fill="#4F46E5" fontWeight="bold">PS</text>
          <rect x="245" y="100" width="100" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
          <rect x="245" y="118" width="80" height="6" rx="3" fill="#6B7280" opacity="0.4" />
          <rect x="230" y="145" width="130" height="1" fill="#E5E7EB" />
          <rect x="230" y="160" width="60" height="6" rx="3" fill="#6B7280" opacity="0.4" />
          <rect x="230" y="180" width="130" height="25" rx="4" fill="#F9FAFB" />
          <rect x="230" y="215" width="130" height="25" rx="4" fill="#F9FAFB" />
        </svg>
      ),
    },
    {
      badge: 'Analytics Dashboard',
      title: 'Know your numbers.',
      points: ['Monthly revenue breakdown', 'Average invoice value tracking', 'Payment rate analytics'],
      illustration: (
        <svg viewBox="0 0 400 300" fill="none" className="w-full" aria-hidden="true">
          <rect x="20" y="20" width="360" height="260" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
          <rect x="40" y="40" width="80" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
          {/* Metric cards */}
          <rect x="40" y="65" width="100" height="50" rx="8" fill="#EEF2FF" />
          <rect x="50" y="75" width="40" height="6" rx="3" fill="#4F46E5" opacity="0.5" />
          <rect x="50" y="90" width="60" height="10" rx="5" fill="#4F46E5" />
          <rect x="155" y="65" width="100" height="50" rx="8" fill="#F0FDF4" />
          <rect x="165" y="75" width="40" height="6" rx="3" fill="#10B981" opacity="0.5" />
          <rect x="165" y="90" width="50" height="10" rx="5" fill="#10B981" />
          <rect x="270" y="65" width="90" height="50" rx="8" fill="#FEF3C7" />
          <rect x="280" y="75" width="40" height="6" rx="3" fill="#F59E0B" opacity="0.5" />
          <rect x="280" y="90" width="55" height="10" rx="5" fill="#F59E0B" />
          {/* Bar chart */}
          <rect x="40" y="135" width="320" height="1" fill="#E5E7EB" />
          {[0, 1, 2, 3, 4, 5].map(i => (
            <rect key={i} x={55 + i * 52} y={250 - [80, 100, 70, 110, 90, 120][i]} width="30" height={[80, 100, 70, 110, 90, 120][i]} rx="4" fill="#4F46E5" opacity={0.5 + i * 0.08} />
          ))}
          <rect x="40" y="255" width="320" height="1" fill="#E5E7EB" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto space-y-24">
        {dives.map((dive, i) => (
          <div key={dive.badge} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
              <SectionBadge>{dive.badge}</SectionBadge>
              <motion.h3
                className="font-display font-bold text-2xl sm:text-3xl text-[#0F0F0F] mt-4"
                initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
              >
                {dive.title}
              </motion.h3>
              <motion.ul
                className="mt-6 space-y-3"
                initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
              >
                {dive.points.map((p) => (
                  <motion.li key={p} variants={fadeUp} className="flex items-center gap-2 text-[#0F0F0F]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 8l3 3 5-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              className={i % 2 === 1 ? 'lg:col-start-1' : ''}
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={scaleUp}
            >
              {dive.illustration}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <>
      <FeaturesHero />
      <FeatureGrid />
      <FeatureDeepDive />
      {/* Final CTA */}
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
            Ready to get paid faster?
          </motion.h2>
          <motion.p className="mt-4 text-gray-400" initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}>
            Join 2,400+ freelancers using InvoiceFlow.
          </motion.p>
          <motion.div className="mt-8" initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}>
            <Link to="/pricing" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#4F46E5] text-white font-semibold">
              Start for Free
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
