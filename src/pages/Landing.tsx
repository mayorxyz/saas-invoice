import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionBadge, TextReveal } from '../components/ui';
import { fadeUp, fadeIn, scaleUp, staggerContainer, viewportConfig } from '../lib/motion';

// SVG Illustrations
function DashboardMockup() {
  return (
    <svg viewBox="0 0 800 500" fill="none" className="w-full max-w-4xl" aria-hidden="true">
      <rect x="0" y="0" width="800" height="500" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      {/* Browser chrome */}
      <rect x="0" y="0" width="800" height="40" rx="12" fill="#F9FAFB" />
      <rect x="0" y="28" width="800" height="12" fill="#F9FAFB" />
      <circle cx="24" cy="20" r="5" fill="#EF4444" opacity="0.7" />
      <circle cx="42" cy="20" r="5" fill="#F59E0B" opacity="0.7" />
      <circle cx="60" cy="20" r="5" fill="#10B981" opacity="0.7" />
      {/* Sidebar */}
      <rect x="0" y="40" width="180" height="460" fill="#F9FAFB" />
      <rect x="20" y="60" width="100" height="10" rx="5" fill="#4F46E5" opacity="0.2" />
      <rect x="20" y="90" width="140" height="8" rx="4" fill="#E5E7EB" />
      <rect x="20" y="110" width="120" height="8" rx="4" fill="#E5E7EB" />
      <rect x="20" y="130" width="130" height="8" rx="4" fill="#E5E7EB" />
      <rect x="20" y="150" width="110" height="8" rx="4" fill="#E5E7EB" />
      <rect x="20" y="170" width="125" height="8" rx="4" fill="#E5E7EB" />
      {/* Main content */}
      <rect x="200" y="55" width="120" height="14" rx="7" fill="#0F0F0F" opacity="0.8" />
      {/* Stat cards */}
      <rect x="560" y="55" width="100" height="50" rx="8" fill="#EEF2FF" />
      <rect x="570" y="65" width="50" height="6" rx="3" fill="#4F46E5" opacity="0.5" />
      <rect x="570" y="80" width="70" height="10" rx="5" fill="#4F46E5" />
      <rect x="670" y="55" width="100" height="50" rx="8" fill="#F0FDF4" />
      <rect x="680" y="65" width="50" height="6" rx="3" fill="#10B981" opacity="0.5" />
      <rect x="680" y="80" width="60" height="10" rx="5" fill="#10B981" />
      {/* Invoice table */}
      <rect x="200" y="120" width="570" height="35" rx="6" fill="#F9FAFB" />
      <rect x="215" y="132" width="60" height="8" rx="4" fill="#6B7280" opacity="0.5" />
      <rect x="350" y="132" width="80" height="8" rx="4" fill="#6B7280" opacity="0.5" />
      <rect x="500" y="132" width="50" height="8" rx="4" fill="#6B7280" opacity="0.5" />
      <rect x="620" y="132" width="60" height="8" rx="4" fill="#6B7280" opacity="0.5" />
      {/* Row 1 - Paid */}
      <rect x="200" y="165" width="570" height="40" rx="0" fill="white" />
      <rect x="215" y="180" width="70" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
      <rect x="350" y="180" width="90" height="8" rx="4" fill="#6B7280" opacity="0.5" />
      <rect x="500" y="180" width="50" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
      <rect x="620" y="175" width="50" height="18" rx="9" fill="#D1FAE5" />
      <rect x="630" y="181" width="30" height="6" rx="3" fill="#10B981" />
      {/* Row 2 - Overdue */}
      <rect x="200" y="210" width="570" height="40" rx="0" fill="white" />
      <rect x="215" y="225" width="70" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
      <rect x="350" y="225" width="90" height="8" rx="4" fill="#6B7280" opacity="0.5" />
      <rect x="500" y="225" width="50" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
      <rect x="620" y="220" width="50" height="18" rx="9" fill="#FEF3C7" />
      <rect x="630" y="226" width="30" height="6" rx="3" fill="#F59E0B" />
      {/* Row 3 - Draft */}
      <rect x="200" y="255" width="570" height="40" rx="0" fill="white" />
      <rect x="215" y="270" width="70" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
      <rect x="350" y="270" width="90" height="8" rx="4" fill="#6B7280" opacity="0.5" />
      <rect x="500" y="270" width="50" height="8" rx="4" fill="#0F0F0F" opacity="0.6" />
      <rect x="620" y="265" width="50" height="18" rx="9" fill="#F3F4F6" />
      <rect x="630" y="271" width="30" height="6" rx="3" fill="#6B7280" />
      {/* Bottom area */}
      <rect x="200" y="310" width="570" height="1" fill="#E5E7EB" />
      <rect x="200" y="330" width="100" height="10" rx="5" fill="#4F46E5" opacity="0.3" />
    </svg>
  );
}

function StepIllustration({ step }: { step: number }) {
  if (step === 1) {
    return (
      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[200px]" aria-hidden="true">
        <rect x="20" y="10" width="160" height="140" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="40" y="30" width="60" height="8" rx="4" fill="#6B7280" opacity="0.4" />
        <rect x="40" y="50" width="120" height="24" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
        <rect x="50" y="58" width="60" height="8" rx="4" fill="#0F0F0F" opacity="0.3" />
        <rect x="40" y="86" width="120" height="24" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
        <rect x="50" y="94" width="80" height="8" rx="4" fill="#0F0F0F" opacity="0.3" />
        <circle cx="155" cy="130" r="14" fill="#10B981" />
        <path d="M149 130l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[200px]" aria-hidden="true">
        <rect x="30" y="5" width="140" height="150" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="45" y="20" width="50" height="8" rx="4" fill="#4F46E5" opacity="0.6" />
        <rect x="45" y="40" width="110" height="1" fill="#E5E7EB" />
        <rect x="45" y="52" width="70" height="6" rx="3" fill="#0F0F0F" opacity="0.4" />
        <rect x="130" y="52" width="25" height="6" rx="3" fill="#0F0F0F" opacity="0.4" />
        <rect x="45" y="66" width="60" height="6" rx="3" fill="#0F0F0F" opacity="0.4" />
        <rect x="130" y="66" width="25" height="6" rx="3" fill="#0F0F0F" opacity="0.4" />
        <rect x="45" y="80" width="80" height="6" rx="3" fill="#0F0F0F" opacity="0.4" />
        <rect x="130" y="80" width="25" height="6" rx="3" fill="#0F0F0F" opacity="0.4" />
        <rect x="45" y="100" width="110" height="1" fill="#E5E7EB" />
        <rect x="100" y="112" width="30" height="6" rx="3" fill="#6B7280" opacity="0.5" />
        <rect x="130" y="112" width="25" height="6" rx="3" fill="#0F0F0F" opacity="0.6" />
        <rect x="100" y="126" width="30" height="8" rx="4" fill="#4F46E5" opacity="0.3" />
        <rect x="130" y="126" width="25" height="8" rx="4" fill="#4F46E5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[200px]" aria-hidden="true">
      <rect x="40" y="40" width="120" height="80" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <path d="M40 50l60 40 60-40" stroke="#E5E7EB" strokeWidth="1.5" fill="none" />
      <rect x="70" y="20" width="60" height="40" rx="6" fill="#D1FAE5" />
      <circle cx="100" cy="40" r="12" fill="#10B981" />
      <path d="M95 40l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="80" y="130" width="40" height="6" rx="3" fill="#10B981" opacity="0.5" />
    </svg>
  );
}

function InvoicePreviewSVG() {
  return (
    <svg viewBox="0 0 400 520" fill="none" className="w-full max-w-md" aria-hidden="true">
      <rect x="0" y="0" width="400" height="520" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="30" y="30" width="80" height="12" rx="6" fill="#4F46E5" opacity="0.15" />
      <text x="30" y="40" fontFamily="JetBrains Mono" fontSize="11" fill="#4F46E5" opacity="0.8">INVOICE</text>
      <text x="280" y="40" fontFamily="JetBrains Mono" fontSize="10" fill="#6B7280">INV-2025-047</text>
      <rect x="30" y="60" width="120" height="10" rx="5" fill="#0F0F0F" opacity="0.8" />
      <text x="30" y="68" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0F0F0F">Bright Creatives Studio</text>
      <rect x="30" y="90" width="50" height="6" rx="3" fill="#6B7280" opacity="0.5" />
      <text x="30" y="95" fontFamily="Inter" fontSize="8" fill="#6B7280">Bill To:</text>
      <text x="30" y="110" fontFamily="Inter" fontSize="9" fill="#0F0F0F">Paystack Inc</text>
      <text x="30" y="122" fontFamily="Inter" fontSize="9" fill="#0F0F0F">Lagos, Nigeria</text>
      <text x="280" y="95" fontFamily="Inter" fontSize="8" fill="#6B7280">Issue: 14 Jan 2025</text>
      <text x="280" y="110" fontFamily="Inter" fontSize="8" fill="#6B7280">Due: 28 Jan 2025</text>
      <rect x="30" y="140" width="340" height="1" fill="#E5E7EB" />
      <rect x="30" y="155" width="100" height="6" rx="3" fill="#6B7280" opacity="0.4" />
      <rect x="250" y="155" width="40" height="6" rx="3" fill="#6B7280" opacity="0.4" />
      <rect x="320" y="155" width="50" height="6" rx="3" fill="#6B7280" opacity="0.4" />
      <text x="30" y="180" fontFamily="Inter" fontSize="9" fill="#0F0F0F">Brand Strategy – 10hrs @ $120</text>
      <text x="320" y="180" fontFamily="Inter" fontSize="9" fill="#0F0F0F" textAnchor="end">$1,200</text>
      <text x="30" y="200" fontFamily="Inter" fontSize="9" fill="#0F0F0F">Logo Design</text>
      <text x="320" y="200" fontFamily="Inter" fontSize="9" fill="#0F0F0F" textAnchor="end">$500</text>
      <text x="30" y="220" fontFamily="Inter" fontSize="9" fill="#0F0F0F">Brand Guidelines</text>
      <text x="320" y="220" fontFamily="Inter" fontSize="9" fill="#0F0F0F" textAnchor="end">$300</text>
      <rect x="30" y="240" width="340" height="1" fill="#E5E7EB" />
      <text x="250" y="265" fontFamily="Inter" fontSize="9" fill="#6B7280">Subtotal</text>
      <text x="370" y="265" fontFamily="Inter" fontSize="9" fill="#0F0F0F" textAnchor="end">$2,000</text>
      <text x="250" y="282" fontFamily="Inter" fontSize="9" fill="#6B7280">Tax (7.5%)</text>
      <text x="370" y="282" fontFamily="Inter" fontSize="9" fill="#0F0F0F" textAnchor="end">$150</text>
      <rect x="240" y="295" width="130" height="1" fill="#0F0F0F" opacity="0.2" />
      <text x="250" y="315" fontFamily="Inter" fontSize="11" fontWeight="700" fill="#0F0F0F">Total</text>
      <text x="370" y="315" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700" fill="#4F46E5" textAnchor="end">$2,150</text>
      <rect x="30" y="340" width="340" height="1" fill="#E5E7EB" />
      <text x="30" y="365" fontFamily="Inter" fontSize="8" fill="#6B7280">Payment due within 14 days. Thank you for your business.</text>
    </svg>
  );
}

// Sections
function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#4F46E5] opacity-[0.05] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <SectionBadge>Now in Public Beta — Free to start</SectionBadge>
        </motion.div>

        <TextReveal
          text="Invoices that get you paid. Fast."
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0F0F0F] mt-6 leading-tight"
          delay={0.2}
        />

        <motion.p
          className="mt-6 text-lg text-[#6B7280] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Create professional invoices in under 2 minutes. Track payments, manage clients, and get paid — all in one place.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm">
            Start for Free
          </Link>
          <a href="#how-it-works" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#E5E7EB] text-[#0F0F0F] font-semibold text-sm bg-white">
            See how it works
          </a>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-[#6B7280]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Joined by 2,400+ freelancers · No credit card required
        </motion.p>
      </div>

      <motion.div
        className="mt-16 w-full max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={scaleUp}
      >
        <DashboardMockup />
      </motion.div>
    </section>
  );
}



function LogoStrip() {
  const logos = ['Paystack', 'Flutterwave', 'Selar', 'Techpoint', 'GetFundedAfrica', 'Cowrywise', 'Brass', 'PiggyVest'];
  return (
    <section className="bg-[#EEF2FF] py-8 overflow-hidden">
      <p className="text-center text-sm text-[#6B7280] mb-6">Trusted by freelancers at</p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <span key={i} className="mx-8 text-lg font-semibold text-[#6B7280] opacity-60">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: 1, title: 'Add your client', body: 'Add a client once. Pick them from your list every time you invoice.' },
    { num: 2, title: 'Create your invoice', body: 'Fill in your services, set your rate, choose a due date. Done in under 2 minutes.' },
    { num: 3, title: 'Send & get paid', body: 'Email the invoice directly. Your client pays online. You get notified instantly.' },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge>How it works</SectionBadge>
          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl text-[#0F0F0F] mt-4"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            Three steps to getting paid.
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0 border-t-2 border-dashed border-[#E5E7EB]" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="text-center relative"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeUp}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex justify-center mb-6">
                <StepIllustration step={step.num} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="font-semibold text-lg text-[#0F0F0F] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B7280]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  const bullets = [
    { text: 'Invoice dashboard at a glance', icon: 'invoice' },
    { text: 'Client management, simplified', icon: 'clients' },
    { text: 'Revenue analytics built in', icon: 'analytics' },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionBadge>Live preview</SectionBadge>
            <motion.h2
              className="font-display font-bold text-3xl sm:text-4xl text-[#0F0F0F] mt-4"
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
            >
              Everything you need. Nothing you don't.
            </motion.h2>
            <motion.ul
              className="mt-8 space-y-4"
              initial="hidden" whileInView="visible" viewport={viewportConfig}
              variants={staggerContainer}
            >
              {bullets.map((b) => (
                <motion.li key={b.text} variants={fadeUp} className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect width="24" height="24" rx="6" fill="#EEF2FF" />
                    {b.icon === 'invoice' && <path d="M7 8h10M7 12h7M7 16h10" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />}
                    {b.icon === 'clients' && <><circle cx="12" cy="9" r="3" stroke="#4F46E5" strokeWidth="1.5" /><path d="M6 18c0-3 3-5 6-5s6 2 6 5" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" /></>}
                    {b.icon === 'analytics' && <><rect x="6" y="14" width="3" height="4" rx="1" fill="#4F46E5" /><rect x="10.5" y="10" width="3" height="8" rx="1" fill="#4F46E5" /><rect x="15" y="7" width="3" height="11" rx="1" fill="#4F46E5" /></>}
                  </svg>
                  <span className="text-[#0F0F0F] font-medium">{b.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={scaleUp}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const features = [
    { title: 'Fast Invoice Creation', body: 'Go from blank to sent in under 2 minutes. No unnecessary fields.', icon: 'lightning' },
    { title: 'PDF Download', body: 'Every invoice generates a clean, branded PDF your clients can open anywhere.', icon: 'document' },
    { title: 'Email Directly', body: 'Send invoices to clients straight from InvoiceFlow. No copy-paste.', icon: 'envelope' },
    { title: 'Payment Tracking', body: 'Mark invoices as paid manually or let payment integrations do it automatically.', icon: 'check' },
    { title: 'Client Directory', body: 'Store client details once. Autofill every invoice you create for them.', icon: 'people' },
    { title: 'Overdue Alerts', body: 'Automatic reminders go out before and after due dates. You don\'t have to chase.', icon: 'bell' },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    lightning: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    document: <><rect x="5" y="3" width="14" height="18" rx="2" stroke="#4F46E5" strokeWidth="2" /><path d="M9 13v4M7 15h4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
    envelope: <><rect x="3" y="6" width="18" height="12" rx="2" stroke="#4F46E5" strokeWidth="2" /><path d="M3 8l9 6 9-6" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
    check: <><circle cx="12" cy="12" r="9" stroke="#4F46E5" strokeWidth="2" /><path d="M8 12l3 3 5-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    people: <><circle cx="9" cy="8" r="3" stroke="#4F46E5" strokeWidth="2" /><circle cx="17" cy="9" r="2.5" stroke="#4F46E5" strokeWidth="2" /><path d="M3 19c0-3 3-5 6-5s6 2 6 5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /><path d="M15 19c0-2 2-4 4-4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
    bell: <><path d="M12 3a6 6 0 016 6c0 4 2 6 2 6H4s2-2 2-6a6 6 0 016-6z" stroke="#4F46E5" strokeWidth="2" /><path d="M10 19a2 2 0 004 0" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" /></>,
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge>Features</SectionBadge>
          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl text-[#0F0F0F] mt-4"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            Built for the way you actually work.
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportConfig}
          variants={staggerContainer}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-[#E5E7EB] bg-white shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {iconMap[f.icon]}
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

function InvoicePreview() {
  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionBadge>Invoice design</SectionBadge>
          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl text-[#0F0F0F] mt-4"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            Professional invoices, every time.
          </motion.h2>
          <motion.p
            className="mt-4 text-[#6B7280]"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            Your clients see a clean, structured invoice — not a spreadsheet screenshot. InvoiceFlow generates polished PDFs with your business name, logo, and payment terms.
          </motion.p>
          <motion.ul
            className="mt-6 space-y-3"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
          >
            {['Your business name and logo', 'Itemized line items with totals', 'Automatic tax calculation', 'Payment terms and due date', 'Custom notes field'].map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-center gap-2 text-sm text-[#0F0F0F]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 8l3 3 5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={scaleUp}
        >
          <InvoicePreviewSVG />
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { initials: 'CA', name: 'Chioma A.', role: 'UI/UX Designer, Lagos', quote: 'I used to spend 30 minutes making invoices in Google Docs. Now it\'s 2 minutes and my clients always pay on time.' },
    { initials: 'DO', name: 'David O.', role: 'Fullstack Developer, Abuja', quote: 'The client portal alone is worth it. My clients see their invoice and pay without any back-and-forth.' },
    { initials: 'AM', name: 'Adaeze M.', role: 'Brand Consultant, Port Harcourt', quote: 'Finally a tool that doesn\'t feel like accounting software. Clean, fast, and it just works.' },
  ];

  return (
    <section className="py-24 px-6 bg-[#EEF2FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge>Testimonials</SectionBadge>
          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl text-[#0F0F0F] mt-4"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            Freelancers love it. Their clients do too.
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="p-6 rounded-2xl bg-white shadow-sm">
              <p className="text-[#0F0F0F] italic text-sm leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-6">
                <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
                  <circle cx="20" cy="20" r="20" fill="#4F46E5" />
                  <text x="20" y="24" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" fontFamily="Inter">{t.initials}</text>
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[#0F0F0F]">{t.name}</p>
                  <p className="text-xs text-[#6B7280]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const plans = [
    { name: 'Free', price: '$0', period: '/mo', features: ['5 clients', '10 invoices/month', 'PDF download', 'Email invoices'], cta: 'Start Free', highlight: false },
    { name: 'Pro', price: '$9', period: '/mo', features: ['Unlimited clients + invoices', 'Recurring invoices', 'Custom branding', 'Auto payment reminders', 'Revenue analytics'], cta: 'Start Pro', highlight: true },
    { name: 'Business', price: '$25', period: '/mo', features: ['Everything in Pro', 'Team members', 'Client payment portal', 'Paystack + Stripe integration', 'Tax reports + API access'], cta: 'Contact Sales', highlight: false },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge>Pricing</SectionBadge>
          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl text-[#0F0F0F] mt-4"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            Start free. Scale when you're ready.
          </motion.h2>
          <motion.p
            className="mt-3 text-[#6B7280]"
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          >
            No contracts. No setup fees. Cancel anytime.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`p-8 rounded-2xl border ${plan.highlight ? 'border-[#4F46E5] bg-[#EEF2FF]' : 'border-[#E5E7EB] bg-white'} shadow-sm relative`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-[#4F46E5] text-white">Most Popular</span>
              )}
              <h3 className="font-semibold text-lg text-[#0F0F0F]">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold text-[#0F0F0F]">{plan.price}</span>
                <span className="text-sm text-[#6B7280]">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#0F0F0F]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 8l3 3 5-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className={`mt-8 block text-center py-3 rounded-xl font-semibold text-sm ${plan.highlight ? 'bg-[#4F46E5] text-white' : 'border border-[#E5E7EB] text-[#0F0F0F] bg-white'}`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <Link to="/pricing" className="text-sm text-[#4F46E5] font-medium">View full pricing →</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none">
          <ellipse cx="300" cy="200" rx="250" ry="150" fill="#4F46E5" opacity="0.08" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <TextReveal
          text="Your next invoice is 2 minutes away."
          className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white"
        />
        <motion.p
          className="mt-6 text-lg text-gray-400"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
        >
          Join 2,400+ freelancers already using InvoiceFlow to get paid faster.
        </motion.p>
        <motion.div
          className="mt-8"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
        >
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#4F46E5] text-white font-semibold">
            Create Your First Invoice
          </Link>
        </motion.div>
        <motion.p
          className="mt-4 text-sm text-gray-500"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
        >
          Free forever · No credit card needed · Setup in 60 seconds
        </motion.p>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <DashboardPreview />
      <FeaturesGrid />
      <InvoicePreview />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
